import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import z from "zod";
import { prisma } from "~/server/db";

export const itemRouter = createTRPCRouter({
  add: publicProcedure
    .input(
      z.object({
        name: z.string(),
        purchase_link: z.string(),
        image_url: z.string(),
        price: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.item.create({
          data: {
            name: input.name,
            purchase_link: input.purchase_link,
            image_url: input.image_url,
            price: input.price,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.item.findMany({
        select: {
          name: true,
          id: true,
          purchase_link: true,
          image_url: true,
          price: true,
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  }),
  getById: publicProcedure.input(z.number()).query(async ({ ctx, input }) => {
    try {
      await ctx.prisma.item.findFirst({
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
        purchase_link: z.string(),
        image_url: z.string(),
        price: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.item.update({
          where: {
            id: input.id,
          },
          data: {
            name: input.name,
            purchase_link: input.purchase_link,
            image_url: input.image_url,
            price: input.price,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
  delete: publicProcedure.input(z.number()).mutation(async ({ ctx, input }) => {
    try {
      await ctx.prisma.item.delete({
        where: {
          id: input,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }),
});
