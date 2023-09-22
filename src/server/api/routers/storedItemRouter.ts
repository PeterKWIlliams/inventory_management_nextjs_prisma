import { TRPCError } from "@trpc/server";
import { createTRPCRouter, privateProcedure } from "../trpc";

import z from "zod";
import { BaseItem, Prisma, Supplier } from "@prisma/client";
import { ItemInfoSchema } from "prisma/generated/zod";

interface CreateItemData {
  name: string;
  itemStorageId: string;
  ItemInfo: {
    create: {
      desiredQuantity: number;
      expiryDate?: Date | null;
      purchaseDate: Date;
      purchasePrice: number;
      BaseItem?: {
        create: {
          name: string;
          type: string;
        };
      };
      supplier?: {
        create: {
          name: string;
        };
      };
    };
  };
}
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
        const storeItem = await ctx.prisma.storedItem.create({
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
    const deleteUsers = ctx.prisma.storedItem.deleteMany({});
  }),
  getAllForUser: privateProcedure.query(async ({ ctx, input }) => {
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
      },
    });
    return userItems;
  }),
});
