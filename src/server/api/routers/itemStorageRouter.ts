import { TRPCError } from '@trpc/server';
import { createTRPCRouter, privateProcedure } from '../trpc';

import z from 'zod';
import { itemStorageBaseImgUrl } from '~/utils/constants';

export const itemStorageRouter = createTRPCRouter({
  add: privateProcedure
    .input(
      z.object({
        name: z.string(),
        location: z.string(),
        managedLocationId: z.string().cuid(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      console.log('im hitting');
      const itemStorage = await ctx.prisma.itemStorage.create({
        data: {
          name: input.name,
          location: input.location,
          managedLocationId: input.managedLocationId,
          image_url: itemStorageBaseImgUrl,
        },
      });

      if (!itemStorage)
        throw new TRPCError({
          code: 'UNPROCESSABLE_CONTENT',
          message: 'storage could not be created',
        });

      return itemStorage;
    }),
  getById: privateProcedure.input(z.string()).query(async ({ ctx, input }) => {
    const itemStorage = await ctx.prisma.itemStorage.findFirst({
      where: {
        id: input,
      },
      include: {
        managedLocation: true,
        storedItem: true,
      },
    });
    if (!itemStorage) throw new Error('Error getting storage');
    return itemStorage;
  }),
  getAllForUser: privateProcedure.query(async ({ ctx }) => {
    const itemStorage = await ctx.prisma.itemStorage.findMany({
      where: {
        managedLocation: {
          userId: ctx.userId,
        },
      },
      include: {
        managedLocation: {
          include: {
            location: {
              include: {
                address: true,
              },
            },
          },
        },

        storedItem: {
          include: {
            itemStorage: true,
            ItemInfo: true,
          },
        },
      },
    });
    return itemStorage;
  }),
  update: privateProcedure
    .input(
      z.object({
        storageId: z.string(),
        location: z.string(),
        managedLocationId: z.string().cuid(),
        name: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.itemStorage.update({
        where: {
          id: input.storageId,
        },
        data: {
          name: input.name,
          location: input.location,
          managedLocationId: input.managedLocationId,
        },
      });
    }),
  deleteById: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.itemStorage.delete({
          where: {
            id: input.id,
          },
        });
      } catch (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message:
            'something went wrong when trying to delete the item storage',
          cause: error,
        });
      }
    }),
});
