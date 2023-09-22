import { TRPCError } from "@trpc/server";
import { createTRPCRouter, privateProcedure } from "../trpc";

import z from "zod";

export const itemStorageRouter = createTRPCRouter({
  add: privateProcedure
    .input(
      z.object({
        name: z.string(),
        location: z.string(),
        managedLocationId: z.string(),
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
});
