import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import z from "zod";
import { prisma } from "~/server/db";

export const managementRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.purchasable_items.findMany({
        select: {
          id: true,
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  }),
  add: publicProcedure
    .input(
      z.object({
        distributorId: z.number(),
        itemId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.purchasable_items.create({
          data: {
            distributorId: input.distributorId,
            itemId: input.itemId,

          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        distributorId: z.number(),
        itemId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.purchasable_items.update({
          where: {
            id: input.id,
          },
          data: {
            distributorId: input.distributorId,
            itemId: input.itemId,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
  getById: publicProcedure.input(z.number()).query(async ({ ctx, input }) => {
    try {
      await ctx.prisma.purchasable_items.findFirst({
        where: {
          id: input,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }),
  delete: publicProcedure.input(z.number()).mutation(async ({ ctx, input }) => {
    try {
      await ctx.prisma.purchasable_items.delete({
        where: {
          id: input,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }),
});
