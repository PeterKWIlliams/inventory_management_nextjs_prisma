import { createTRPCRouter } from "~/server/api/trpc";

import { addressRouter } from "~/server/api/routers/addressRouter";
import { userRouter } from "./routers/userRouter";
import { managedLocationRouter } from "./routers/managedLocationRouter";
import { itemStorageRouter } from "./routers/itemStorageRouter";
import { storedItemRouter } from "./routers/storedItemRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  address: addressRouter,
  user: userRouter,
  managedLocation: managedLocationRouter,
  itemStorage: itemStorageRouter,
  storedItem: storedItemRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
