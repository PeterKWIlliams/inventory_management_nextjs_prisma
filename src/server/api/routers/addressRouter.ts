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
  getById: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.item.findFirst({
          where: {
            id: input.id,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
    add: publicProcedure
    .input(
      z.object{
        street: z.string(),
        city: z.string(),
        postcode: z.string(),
        household: z.string(),
        household: z.houserhold(),
        user: z.user(),
      }).mutation(async ({ ctx, input }) => {
        try {
          await ctx.prisma.address.create({
            data: {
              street: input.street,
              city: input.city,
              postcode: input.postcode,
              household: input.household,
              User: input.user,
            },
          });
        } catch (error) {
          console.log(error);
        }
      },
});
