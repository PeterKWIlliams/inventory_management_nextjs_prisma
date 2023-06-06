import { api } from "~/utils/api";
import { createTRPCRouter, publicProcedure } from "../trpc";
import z, { any } from "zod";

export const userRouter = createTRPCRouter({
  add: publicProcedure
    .input(
      z.object({
        email: z.string(),
        first_name: z.string(),
        last_name: z.string(),
        clerkId: z.string(),
        city: z.string(),
        postcode: z.string(),
        street: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.address.create({
          data: {
            city: input.city,
            postcode: input.postcode,
            street: input.street,
          },
        });
      } catch (error) {
        console.log(error);
      }
      const address = await ctx.prisma.address.findFirst({
        where: {
          city: input.city,
          postcode: input.postcode,
          street: input.street,
        },
      });

      if (!address) throw new Error("Address not found");

      try {
        await ctx.prisma.user.create({
          data: {
            first_name: input.first_name,
            last_name: input.last_name,
            email: input.email,
            addressId: address.id,
            clerkId: input.clerkId,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.user.findMany({
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
          user_address: true,
          inventoryManagement: true,
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  }),
  getById: publicProcedure.input(z.number()).query(async ({ ctx, input }) => {
    try {
      await ctx.prisma.user.findFirst({
        where: {
          id: input,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }),
});
