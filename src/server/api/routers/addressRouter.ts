import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import z from "zod";

export const addressRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.item.findMany({
        select: {
          name: true,
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
        name: z.string(),
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
});
