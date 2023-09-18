import { createTRPCRouter, privateProcedure } from "../trpc";

import z from "zod";

export const managedLocationRouter = createTRPCRouter({
  add: privateProcedure
    .input(
      z.object({
        name: z.string(),
        city: z.string(),
        street: z.string(),
        postcode: z.string(),
        userId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findFirst({
        where: {
          id: input.userId,
        },
      });
      if (!user) throw new Error("Need to set up account first");
      const address = await ctx.prisma.address.create({
        data: {
          city: input.city,
          street: input.street,
          postcode: input.postcode,
        },
      });
      if (!address) throw new Error("Error creating address");
      const location = await ctx.prisma.location.create({
        data: {
          name: input.name,
          addressId: address.id,
        },
      });
      if (!location) throw new Error("Error creating location");
      const managedLocation = await ctx.prisma.managedLocation.create({
        data: {
          locationId: location.id,
          userId: user.id,
        },
      });
      if (!managedLocation) throw new Error("Error creating managed location");
      return managedLocation;
    }),

  getAllForUser: privateProcedure.query(async ({ ctx }) => {
    const managedLocations = await ctx.prisma.managedLocation.findMany({
      where: {
        userId: ctx.userId,
      },
      include: {
        location: {
          include: {
            address: true,
          },
        },
      },
    });

    return managedLocations;
  }),
  getById: privateProcedure.input(z.string()).query(async ({ ctx, input }) => {
    try {
      const managedLocationData = await ctx.prisma.managedLocation.findFirst({
        where: {
          id: input,
        },

        select: {
          location: {
            include: {
              address: true,
            },
          },
          itemStorage: {
            include: {
              _count: {
                select: { storedItem: true },
              },
              storedItem: {
                include: {
                  ItemInfo: true,
                },
              },
            },
          },
        },
      });
      if (managedLocationData) return managedLocationData;
    } catch (error) {
      console.log(error);
    }
  }),
  getAllWithItems: privateProcedure.query(async ({ ctx }) => {
    const managedLocationsWithItems = await ctx.prisma.managedLocation.findMany(
      {
        where: {
          userId: ctx.userId,
        },
        include: {
          itemStorage: {
            include: {
              storedItem: true,
            },
          },
        },
      }
    );
    return managedLocationsWithItems;
  }),
  getAllForUserWithStorage: privateProcedure.query(async ({ ctx }) => {
    const managedLocationsWithStorage =
      await ctx.prisma.managedLocation.findMany({
        where: {
          userId: ctx.userId,
        },
        select: {
          location: {
            include: {
              managedLocation: true,
            },
          },
          itemStorage: {
            include: {
              storedItem: {
                include: {
                  ItemInfo: true,
                },
              },
              _count: {
                select: { storedItem: true },
              },
            },
          },
        },
      });
    return managedLocationsWithStorage;
  }),

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
