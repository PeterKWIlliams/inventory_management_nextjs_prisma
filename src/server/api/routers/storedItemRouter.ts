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
      const storedItemData: CreateItemData = {
        name: input.name,
        itemStorageId: input.itemStorageId,
        ItemInfo: {
          create: {
            desiredQuantity: input.desiredQuantity,
            expiryDate: input.expiryDate,
            purchaseDate: input.purchaseDate,
            purchasePrice: input.purchasePrice,
          },
        },
      };
      if (input.baseItemName && input.baseType) {
        storedItemData.ItemInfo.create.BaseItem = {
          create: {
            name: input.baseItemName,
            type: input.baseType,
          },
        };
      }

      if (input.supplierName) {
        storedItemData.ItemInfo.create.supplier = {
          create: {
            name: input.supplierName,
          },
        };
      }

      try {
        const storedItem = await ctx.prisma.storedItem.create({
          data: storedItemData,
        });
      } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          console.log("Error message", e);
        }
      }
    }),
});
