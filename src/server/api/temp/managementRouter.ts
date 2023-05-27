import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import z from "zod";
import { prisma } from "~/server/db";

export const managementRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.management.findMany({
        select: {
          id: true,
          userId: true,
          house_holdId: true,
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  }),
  add: publicProcedure
    .input(
      z.object({
        userId: z.number(),
        house_holdId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.management.create({
          data: {
            userId: input.userId,
            house_holdId: input.house_holdId,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
  getById: publicProcedure.input(z.number()).query(async ({ ctx, input }) => {
    try {
      await ctx.prisma.management.findFirst({
        where: {
          id: input,
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
        userId: z.number(),
        house_holdId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.management.update({
          where: {
            id: input.id,
          },
          data: {
            userId: input.userId,
            house_holdId: input.house_holdId,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
  delete: publicProcedure.input(z.number()).mutation(async ({ ctx, input }) => {
    try {
      await ctx.prisma.management.delete({
        where: {
          id: input,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }),
});
