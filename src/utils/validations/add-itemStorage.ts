import { z } from "zod";

export const addItemStorageFormValidator = z.object({
  name: z.string().nonempty({ message: "must have a name" }),
  location: z.string().nonempty({ message: "must have a location" }),
  managedLocationId: z.string().nonempty({ message: "must include location" }),
});

export type ItemStorageFormDataType = z.infer<
  typeof addItemStorageFormValidator
>;
