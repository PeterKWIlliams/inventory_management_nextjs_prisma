import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import z, { any, number, string } from "zod";

export const addressRouter = createTRPCRouter({
  add: publicProcedure
    .input(
      z.object({
        street: z.string(),
        city: z.string(),
        postcode: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.address.create({
          data: {
            street: input.street,
            city: input.city,
            postcode: input.postcode,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
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
  getById: publicProcedure.input(z.number()).query(async ({ ctx, input }) => {
    try {
      await ctx.prisma.address.findFirst({
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
        street: z.string(),
        city: z.string(),
        postcode: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.address.update({
          where: {
            id: input.id,
          },
          data: {
            street: input.street,
            city: input.city,
            postcode: input.postcode,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
  delete: publicProcedure.input(z.number()).mutation(async ({ ctx, input }) => {
    try {
      await ctx.prisma.address.delete({
        where: {
          id: input,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }),
});
