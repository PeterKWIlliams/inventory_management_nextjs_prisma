import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import z from "zod";

export const addressRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.address.findMany({
        select: {
          id: true,
          street: true,
          city: true,
          postcode: true,
          household: true,
          User: true,
        },
      });
    } catch (error) {
      console.log("error", error);
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
