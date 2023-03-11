import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import z from "zod";

export const itemRouter = createTRPCRouter({
  postMessage: publicProcedure
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
            purchasable_items: {
              create: {
                name: input.name,
                purchase_link: input.purchase_link,
            
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});
