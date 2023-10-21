import { TRPCError } from "@trpc/server";
import { createTRPCRouter, privateProcedure } from "../trpc";

import z from "zod";

export const itemStorageRouter = createTRPCRouter({
  add: privateProcedure
    .input(
      z.object({
        name: z.string(),
        location: z.string(),
        managedLocationId: z.string().cuid(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const itemStorage = await ctx.prisma.itemStorage.create({
        data: {
          name: input.name,
          location: input.location,
          managedLocationId: input.managedLocationId,
        },
      });
      if (!itemStorage)
        throw new TRPCError({
          code: "UNPROCESSABLE_CONTENT",
          message: "storage could not be created",
        });
    }),
  getById: privateProcedure.input(z.string()).query(async ({ ctx, input }) => {
    const itemStorage = await ctx.prisma.itemStorage.findFirst({
      where: {
        id: input,
      },
      include: {
        managedLocation: true,
        storedItem: true,
      },
    });
    if (!itemStorage) throw new Error("Error getting storage");
    return itemStorage;
  }),
  getAllForUser: privateProcedure.query(async ({ ctx, input }) => {
    const itemStorage = await ctx.prisma.itemStorage.findMany({
      where: {
        managedLocation: {
          userId: ctx.userId,
        },
      },
      include: {
        managedLocation: {
          include: {
            location: {
              include: {
                address: true,
              },
            },
          },
        },

        storedItem: {
          include: {
            itemStorage: true,
            ItemInfo: true,
          },
        },
      },
    });
    return itemStorage;
  }),
  getStorageWithLocation: privateProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const itemStorage = await ctx.prisma.itemStorage.findMany({
        where: {
          managedLocationId: input.id,
        },
        include: {
          managedLocation: true,

          storedItem: {
            include: {
              itemStorage: true,
            },
          },
        },
      });
    }),
  update: privateProcedure
    .input(
      z.object({
        storageId: z.string(),
        location: z.string(),
        managedLocationId: z.string().cuid(),
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const updateItemStorage = await ctx.prisma.itemStorage.update({
        where: {
          id: input.storageId,
        },
        data: {
          name: input.name,
          location: input.location,
          managedLocationId: input.managedLocationId,
        },
      });
    }),
  deleteAll: privateProcedure.mutation(async ({ ctx }) => {
    console.log("i am being called");

    try {
      // Start a transaction to delete data from multiple tables
      await ctx.prisma.$transaction([
        ctx.prisma.itemInfo.deleteMany({}),
        ctx.prisma.productInfo.deleteMany({}),
        ctx.prisma.storedItem.deleteMany({}),
        ctx.prisma.itemStorage.deleteMany({}),
        ctx.prisma.managedLocation.deleteMany({}),
        ctx.prisma.location.deleteMany({}),
        ctx.prisma.user.deleteMany({}),
        ctx.prisma.address.deleteMany({}),
        ctx.prisma.supplier.deleteMany({}),
        ctx.prisma.product.deleteMany({}),
        ctx.prisma.baseItem.deleteMany({}),
      ]);

      console.log("Database cleared successfully.");
    } catch (error) {
      console.error("Error clearing database:", error);
    }
  }),
  //this is used just to get the type the naming needs to be changed to getbyid but its already taken the naming of the othe function getById needs a more descriptive name to show exactly what the data is being fetched for
  GetType: privateProcedure.input(z.string()).query(async ({ ctx, input }) => {
    const itemStorage = await ctx.prisma.itemStorage.findFirst({
      where: {
        id: input,
      },
      include: {
        storedItem: true,
      },
    });
    if (!itemStorage) throw new Error("Error getting storage");
    return itemStorage;
  }),
  deleteById: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        const itemStorage = await ctx.prisma.itemStorage.delete({
          where: {
            id: input.id,
          },
        });
      } catch (error) {
        throw new Error(
          "something went wrong when trying to delete the item storage"
        );
      }
    }),
});
