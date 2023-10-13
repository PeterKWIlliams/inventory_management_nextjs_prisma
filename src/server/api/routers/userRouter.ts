import { createTRPCRouter, privateProcedure, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { ProfileFormSchema } from "~/utils/validations/profile-form";

export const userRouter = createTRPCRouter({
  add: privateProcedure
    .input(ProfileFormSchema)
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
            id: ctx.userId,
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
  getAllData: publicProcedure.query(async ({ ctx }) => {
    try {
      const userId = ctx.userId;
      if (!userId) throw new Error("not logged in ");
      const data = await ctx.prisma.managedLocation.findMany({
        where: {
          userId: userId,
        },
        include: {
          itemStorage: {
            include: {
              storedItem: {
                include: {
                  ItemInfo: true,
                },
              },
            },
          },
        },
      });
      if (!data) throw new Error("");
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }),
  getById: privateProcedure.query(async ({ ctx, input }) => {
    const profileData = await ctx.prisma.user.findFirst({
      where: {
        id: ctx.userId,
      },
      select: {
        userAddress: true,
        firstName: true,
        lastName: true,
        email: true,
      },
    });
    if (!profileData)
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "User could not be found",
      });
    return profileData;
  }),
  update: privateProcedure
    .input(ProfileFormSchema)
    .mutation(async ({ ctx, input }) => {
      const updatedUser = await ctx.prisma.user.update({
        where: {
          id: ctx.userId,
        },
        data: {
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
        },
      });
      try {
        await ctx.prisma.address.update({
          where: {
            id: updatedUser.addressId,
          },
          data: {
            city: input.city,
            postcode: input.postcode,
            street: input.street,
          },
        });
      } catch (error) {}
    }),
});
