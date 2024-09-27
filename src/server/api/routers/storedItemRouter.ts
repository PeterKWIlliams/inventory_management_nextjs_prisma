import { createTRPCRouter, privateProcedure } from "../trpc";
import z from "zod";
import { TRPCError } from "@trpc/server";
export const storedItemRouter = createTRPCRouter({
  add: privateProcedure
    .input(
      z.object({
        name: z.string(),
        purchaseDate: z.coerce.date(),
        purchasePrice: z.number(),
        desiredQuantity: z.number(),
        baseItemName: z.string(),
        baseType: z.string(),
        itemStorageId: z.string(),
        expiryDate: z.coerce.date(),
        supplierName: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.storedItem.create({
          data: {
            name: input.name,
            itemStorageId: input.itemStorageId,
            ItemInfo: {
              create: {
                desiredQuantity: input.desiredQuantity,
                purchaseDate: input.purchaseDate,
                expiryDate: input.expiryDate,
                purchasePrice: input.purchasePrice,
                BaseItem: {
                  create: {
                    name: input.baseItemName,
                    type: input.baseType,
                  },
                },
              },
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
  deleteAll: privateProcedure.mutation(async ({ ctx }) => {
    try {
      await ctx.prisma.storedItem.deleteMany({});
    } catch (error) {
      throw new TRPCError({
        code: "UNPROCESSABLE_CONTENT",
        message: "All items could not be deleted",
      });
    }
  }),
  getAllForUser: privateProcedure.query(async ({ ctx }) => {
    const userItems = await ctx.prisma.storedItem.findMany({
      where: {
        itemStorage: {
          managedLocation: {
            userId: ctx.userId,
          },
        },
      },
      include: {
        ItemInfo: true,
        itemStorage: {
          include: {
            managedLocation: {
              include: {
                location: true,
              },
            },
          },
        },
      },
    });
    return userItems;
  }),
  getById: privateProcedure.input(z.string()).query(async ({ ctx, input }) => {
    try {
      const item = await ctx.prisma.storedItem.findFirstOrThrow({
        where: {
          id: input,
        },
        include: {
          ItemInfo: true,
          itemStorage: {
            include: {
              managedLocation: {
                include: {
                  location: true,
                },
              },
            },
          },
        },
      });
      return item;
    } catch (error) {
      throw new Error(
        "The item you are trying to get dosent exist does not exist"
      );
    }
  }),
  deleteById: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.storedItem.delete({
          where: {
            id: input.id,
          },
        });
      } catch (error) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Item could not be deleted",
        });
      }
    }),
  update: privateProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        purchaseDate: z.coerce.date(),
        purchasePrice: z.number(),
        desiredQuantity: z.number(),
        baseItemName: z.string(),
        baseType: z.string(),
        itemStorageId: z.string(),
        expiryDate: z.coerce.date(),
        supplierName: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.itemInfo.update({
          where: {
            id: input.id,
          },
          data: {
            id: input.id,

            purchaseDate: input.purchaseDate,
            purchasePrice: input.purchasePrice,
            desiredQuantity: input.desiredQuantity,
            expiryDate: input.expiryDate,
          },
        });
      } catch (error) {
        throw new Error("something went wrong when trying to delete item");
      }
    }),
});
