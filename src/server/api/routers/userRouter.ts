import { createTRPCRouter, privateProcedure, publicProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import { ProfileFormSchema } from '~/utils/validations/profile-form';

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
      if (user) {
        console.log('user already exists');
        return;
      }
      console.log('user does not exist');
      const address = await ctx.prisma.address.create({
        data: {
          city: input.city,
          postcode: input.postcode,
          street: input.street,
        },
      });
      if (!address)
        throw new TRPCError({
          code: 'UNPROCESSABLE_CONTENT',
          message: 'Address could not be created',
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
          code: 'UNPROCESSABLE_CONTENT',
          message: 'User could not be created',
          cause: error,
        });
      }
    }),
  getAllData: publicProcedure.query(async ({ ctx }) => {
    try {
      const userId = ctx.userId;
      if (!userId) throw new Error('not logged in ');
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
      if (!data) throw new Error('');
      return data;
    } catch (error) {
      console.log('error', error);
    }
  }),
  getById: privateProcedure.query(async ({ ctx }) => {
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
        code: 'BAD_REQUEST',
        message: 'User could not be found',
      });
    return profileData;
  }),
  update: privateProcedure
    .input(ProfileFormSchema)
    .mutation(async ({ ctx, input }) => {
      const { userId, prisma } = ctx;

      try {
        const existingUser = await prisma.user.findUnique({
          where: { id: userId },
          include: { userAddress: true },
        });

        if (existingUser) {
          if (existingUser.userAddress) {
            await prisma.user.update({
              where: { id: userId },
              data: {
                firstName: input.firstName,
                lastName: input.lastName,
                email: input.email,
                userAddress: {
                  update: {
                    city: input.city,
                    postcode: input.postcode,
                    street: input.street,
                  },
                },
              },
            });
          } else {
            await prisma.user.update({
              where: { id: userId },
              data: {
                firstName: input.firstName,
                lastName: input.lastName,
                email: input.email,
                userAddress: {
                  create: {
                    city: input.city,
                    postcode: input.postcode,
                    street: input.street,
                  },
                },
              },
            });
          }
        } else {
          throw new Error('User not found.'); // Or handle this case as needed.
        }
      } catch (error) {
        throw new Error(`Profile update failed: ${(error as Error).message}}`);
      }
    }),
});
