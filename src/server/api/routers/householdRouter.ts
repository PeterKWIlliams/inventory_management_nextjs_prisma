import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import z, { any, number, string } from "zod";

export const householdRouter = createTRPCRouter({
  add: publicProcedure
    .input(
      z.object({
        name: z.string(),
        city: z.string(),
        street: z.string(),
        postcode: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        ctx.prisma.address.create({
          data: {
            city: input.city,
            street: input.street,
            postcode: input.postcode,
          },
        });
      } catch (error) {}
      const address = await ctx.prisma.address.findFirst({
        where: {
          city: input.city,
          street: input.street,
          postcode: input.postcode,
        },
      });
      if (!address) throw new Error("Address not found");
      try {
        await ctx.prisma.household.create({
          data: {
            name: input.name,
            addressId: address.id,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),

  // getAll: publicProcedure.query(async ({ ctx }) => {
  //   try {
  //     return await ctx.prisma.household.findMany({
  //       select: {
  //         id: true,
  //         name: true,
  //         addressId: true,
  //         management: true,
  //         address: true,
  //       },
  //     });
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }),
  // getById: publicProcedure.input(z.number()).query(async ({ ctx, input }) => {
  //   try {
  //     await ctx.prisma.household.findFirst({
  //       where: {
  //         id: input,
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }),
  // update: publicProcedure
  //   .input(
  //     z.object({
  //       id: z.number(),
  //       name: z.string(),
  //       addressId: z.number(),
  //     })
  //   )
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       await ctx.prisma.household.update({
  //         where: {
  //           id: input.id,
  //         },
  //         data: {
  //           name: input.name,
  //           addressId: input.addressId,
  //         },
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }),
  // delete: publicProcedure.input(z.number()).mutation(async ({ ctx, input }) => {
  //   try {
  //     await ctx.prisma.household.delete({
  //       where: {
  //         id: input,
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }),
});
