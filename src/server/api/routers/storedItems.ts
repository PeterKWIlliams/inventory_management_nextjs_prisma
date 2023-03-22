import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import z, { any, number, string } from "zod";

export const storedItemsRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        expiry_date: z.string(),
        purchase_date: z.string(),
        purchase_link: z.string(),
        image_url: z.string(),
        desired_quantity: z.number(),
        quantity: z.number(),
        storage_LocationId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.stored_items.create({
          data: {
            name: input.name,
            expiry_date: input.expiry_date,
            purchase_date: input.purchase_date,
            purchase_link: input.purchase_link,
            image_url: input.image_url,
            desired_quantity: input.desired_quantity,
            quantity: input.quantity,
            storage_locationId: input.storage_LocationId,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.stored_items.findMany({
        select: {
          id: true,
          name: true,
          expiry_date: true,
          purchase_date: true,
          purchase_link: true,
          image_url: true,
          desired_quantity: true,
          quantity: true,
          storage_locationId: true,
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  }),
  getById: publicProcedure.input(z.number()).query(async ({ ctx, input }) => {
    try {
      await ctx.prisma.stored_items.findFirst({
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
        expiry_date: z.string(),
        purchase_date: z.string(),
        purchase_link: z.string(),
        image_url: z.string(),
        desired_quantity: z.number(),
        quantity: z.number(),
        storage_LocationId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.stored_items.update({
          where: {
            id: input.id,
          },
          data: {
            name: input.name,
            expiry_date: input.expiry_date,
            purchase_date: input.purchase_date,
            purchase_link: input.purchase_link,
            image_url: input.image_url,
            desired_quantity: input.desired_quantity,
            quantity: input.quantity,
            storage_locationId: input.storage_LocationId,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
  delete: publicProcedure.input(z.number()).mutation(async ({ ctx, input }) => {
    try {
      await ctx.prisma.stored_items.delete({
        where: {
          id: input,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }),
});
