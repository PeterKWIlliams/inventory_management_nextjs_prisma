import { managedLocationBaseImgUrl } from "~/utils/constants";
import { createTRPCRouter, privateProcedure } from "../trpc";
import z from "zod";
import { TRPCError } from "@trpc/server";

export const managedLocationRouter = createTRPCRouter({
  add: privateProcedure
    .input(
      z.object({
        name: z.string(),
        city: z.string(),
        street: z.string(),
        postcode: z.string(),
        userId: z.string(), // Ensure userId is a valid UUID
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const user = await ctx.prisma.user.findFirstOrThrow({
          where: {
            id: input.userId,
          },
        });

        const managedLocation = await ctx.prisma.$transaction(async (tx) => {
          const location = await tx.location.create({
            data: {
              name: input.name,
              address: {
                create: {
                  city: input.city,
                  street: input.street,
                  postcode: input.postcode,
                },
              },
            },
          });
          const managedLocation = await tx.managedLocation.create({
            data: {
              location: {
                connect: { id: location.id },
              },
              user: {
                connect: { id: user.id },
              },
              image_url: managedLocationBaseImgUrl,
            },
          });
          return managedLocation;
        });
        return managedLocation;
      } catch (error) {
        console.error(error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong with managedLocation add route",
        });
      }
    }),
  getAllForUser: privateProcedure.query(async ({ ctx }) => {
    const managedLocations = await ctx.prisma.managedLocation.findMany({
      where: {
        userId: ctx.userId,
      },
      include: {
        location: {
          include: {
            managedLocation: true,
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
          image_url: true,
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
      return managedLocationData;
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
    try {
    } catch (error) {}
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
  update: privateProcedure
    .input(
      z.object({
        managedLocationId: z.string(),
        name: z.string(),
        city: z.string(),
        street: z.string(),
        postcode: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.managedLocation.findFirstOrThrow({
          where: {
            id: input.managedLocationId,
          },
        });

        await ctx.prisma.managedLocation.update({
          where: {
            id: input.managedLocationId,
          },
          data: {
            location: {
              update: {
                name: input.name,
                address: {
                  update: {
                    city: input.city,
                    street: input.street,
                    postcode: input.postcode,
                  },
                },
              },
            },
          },
        });
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message:
            "Something went wrong with managedLocation update route while trying to update managed location",
        });
      }
    }),
  deleteById: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.managedLocation.delete({
          where: {
            id: input.id,
          },
          include: {
            location: {
              include: {
                address: true,
              },
            },
          },
        });
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message:
            "Something went wrong with managedLocation delete route while deleting a managed location",
        });
      }
    }),
});
