import { TRPCError } from "@trpc/server";
import { createTRPCRouter, privateProcedure } from "../trpc";

import z from "zod";

export const itemStorageRouter = createTRPCRouter({
  add: privateProcedure
    .input(
      z.object({
        name: z.string(),
        location: z.string(),
        managedLocationId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const itemStorage = await ctx.prisma.itemStorage.create({
        data: {
          name: input.name,
          location: input.location,
          managedLocationId: input.managedLocationId,
        },
      });
      if (!itemStorage)
        throw new TRPCError({
          code: "UNPROCESSABLE_CONTENT",
          message: "storage could not be created",
        });
    }),
});
