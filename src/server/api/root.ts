import { createTRPCRouter } from "~/server/api/trpc";
import { itemRouter } from "~/server/api/temp/itemRouter";
import { addressRouter } from "~/server/api/temp/addressRouter";
import { userRouter } from "./temp/userRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  item: itemRouter,
  address: addressRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
