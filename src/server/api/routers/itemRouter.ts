import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import z from "zod";
import { prisma } from "~/server/db";

export const itemRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.item.findMany({
        select: {
          name: true,
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
        name: z.string(),
        address,
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.item.create({
          data: {
            name: input.name,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.item.delete({
          where: {
            id: input.id,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
  getByname: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      try {
        await ctx.prisma.item.findFirst({
          where: {
            name: input.name,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});
