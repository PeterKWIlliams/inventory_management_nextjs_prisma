import { prisma } from "~/server/db";
import { createTRPCRouter, privateProcedure, publicProcedure } from "../trpc";
import z, { any } from "zod";
import toast from "react-hot-toast";

export const userRouter = createTRPCRouter({
  add: privateProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string(),
        userId: z.string(),
        city: z.string(),
        postcode: z.string(),
        street: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findFirst({
        where: {
          id: input.userId,
        },
        select: {
          id: true,
          firstName: true,
        },
      });
      try {
        if (user) throw new Error("User already exists");
      } catch (error) {
        return error;
      }

      const address = await ctx.prisma.address.create({
        data: {
          city: input.city,
          postcode: input.postcode,
          street: input.street,
        },
      });
      if (!address) throw new Error("Address not created");
      try {
        await ctx.prisma.user.create({
          data: {
            id: input.userId,
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email,
            addressId: address.id,
          },
        });
      } catch (error) {
        console.log("this is the error");
      }
    }),
  // getAll: publicProcedure.query(async ({ ctx }) => {
  //   try {
  //     return await ctx.prisma.user.findMany({
  //       select: {
  //         id: true,
  //         firstName: true,
  //         lastName: true,
  //         email: true,
  //         userAddress: true,
  //       },
  //     });
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }),
  getById: privateProcedure.input(z.string()).query(async ({ ctx, input }) => {
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
