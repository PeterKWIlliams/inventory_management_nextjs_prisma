import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import z from "zod";

export const itemRouter = createTRPCRouter({
  addUser: publicProcedure
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
