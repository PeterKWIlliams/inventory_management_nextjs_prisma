import { getAuth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";
import { prisma } from "./db";
import { extractIdFromUrl } from "~/utils/helpers/uploadThingUrlParser";
import { UTApi } from "uploadthing/server";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  managedLocationImageUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    // Set permissions and file types for this FileRoute//
    // eslint-disable-next-line @typescript-eslint/require-await
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const { userId } = getAuth(req);

      // If you throw, the user will not be able to upload
      if (!userId) throw new Error("Please sign in to send pictures");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId, url: req.headers.referer };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      // console.log("Upload complete for userId:", metadata.userId);
      if (!metadata.url) throw new Error("there was an issue");
      const managedLocationId = extractIdFromUrl(metadata.url);
      const utApi = new UTApi({});
      const managedLocation = await prisma.managedLocation.findFirst({
        where: {
          id: managedLocationId,
        },
        select: {
          image_key: true,
        },
      });
      try {
        await prisma.managedLocation.update({
          where: {
            id: managedLocationId,
          },
          data: {
            image_url: file.url,
            image_key: file.key,
          },
        });
      } catch (error) {
        throw new Error(
          "There was an issue processing your request to change picture"
        );
      }
      console.log("this is the key", managedLocation?.image_key);
      if (managedLocation?.image_key) {
        await utApi.deleteFiles(managedLocation?.image_key);
      }
    }),
  itemImageUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    // eslint-disable-next-line @typescript-eslint/require-await
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const { userId } = getAuth(req);

      // If you throw, the user will not be able to upload
      if (!userId) throw new Error("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId, url: req.headers.referer };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      // console.log("Upload complete for userId:", metadata.userId);
      if (!metadata.url)
        throw new Error(
          "there was an issue could not get url from request to change picture"
        );
      const itemInfoId = extractIdFromUrl(metadata.url);
      const utApi = new UTApi({});
      const itemInfo = await prisma.itemInfo.findFirst({
        where: {
          id: itemInfoId,
        },
        select: {
          image_key: true,
        },
      });
      try {
        await prisma.itemInfo.update({
          where: {
            id: itemInfoId,
          },
          data: {
            image_url: file.url,
            image_key: file.key,
          },
        });
      } catch (error) {
        throw new Error(
          "There was an issue processing your request to change picture"
        );
      }
      console.log("this is the key", itemInfo?.image_key);
      if (itemInfo?.image_key) {
        await utApi.deleteFiles(itemInfo?.image_key);
      }
    }),
  storageLocationUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    // eslint-disable-next-line @typescript-eslint/require-await
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const { userId } = getAuth(req);

      // If you throw, the user will not be able to upload
      if (!userId) throw new Error("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId, url: req.headers.referer };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      // console.log("Upload complete for userId:", metadata.userId);
      if (!metadata.url)
        throw new Error(
          "there was an issue could not get url from request to change picture"
        );
      const itemStorageId = extractIdFromUrl(metadata.url);
      const utApi = new UTApi({});
      const itemInfo = await prisma.itemStorage.findFirst({
        where: {
          id: itemStorageId,
        },
        select: {
          image_key: true,
        },
      });
      try {
        await prisma.itemStorage.update({
          where: {
            id: itemStorageId,
          },
          data: {
            image_url: file.url,
            image_key: file.key,
          },
        });
      } catch (error) {
        throw new Error(
          "There was an issue processing your request to change picture"
        );
      }
      console.log("this is the key", itemInfo?.image_key);
      if (itemInfo?.image_key) {
        await utApi.deleteFiles(itemInfo?.image_key);
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
