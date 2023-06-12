import { createTRPCRouter, privateProcedure, publicProcedure } from "../trpc";
import z, { any } from "zod";
import { TRPCError } from "@trpc/server";
import { error } from "console";

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
          id: ctx.userId,
        },
        select: {
          id: true,
          firstName: true,
        },
      });
      if (user)
        throw new TRPCError({
          code: "CONFLICT",
          message: "User already setup",
        });
      const address = await ctx.prisma.address.create({
        data: {
          city: input.city,
          postcode: input.postcode,
          street: input.street,
        },
      });
      if (!address)
        throw new TRPCError({
          code: "UNPROCESSABLE_CONTENT",
          message: "Address could not be created",
        });
      try {
        const user = await ctx.prisma.user.create({
          data: {
            id: input.userId,
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email,
            addressId: address.id,
          },
        });
        if (!user) throw new Error();
      } catch (error) {
        throw new TRPCError({
          code: "UNPROCESSABLE_CONTENT",
          message: "User could not be created",
        });
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
