import { type ourFileRouter } from "~/server/uploadthing";
import { type RouterOutputs } from "~/utils/api";

export type managedLocationGetById =
  RouterOutputs["managedLocation"]["getById"];

export type UploadThingImageEnpoints = keyof typeof ourFileRouter;
