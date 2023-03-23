import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import z, { any, number, string } from "zod";

export const storageLocationRouter = createTRPCRouter({
  add: publicProcedure
    .input(
      z.object({
        name: z.string(),
        Location: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.storage_location.create({
          data: {
            name: input.name,
            Location: input.Location,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.storage_location.findMany({
        select: {
          id: true,
          name: true,
          Location: true,
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  }),
  getById: publicProcedure.input(z.number()).query(async ({ ctx, input }) => {
    try {
      await ctx.prisma.storage_location.findFirst({
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
        name: z.string(),
        Location: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.storage_location.update({
          where: {
            id: input.id,
          },
          data: {
            name: input.name,
            Location: input.Location,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
  delete: publicProcedure.input(z.number()).mutation(async ({ ctx, input }) => {
    try {
      await ctx.prisma.storage_location.delete({
        where: {
          id: input,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }),
});
