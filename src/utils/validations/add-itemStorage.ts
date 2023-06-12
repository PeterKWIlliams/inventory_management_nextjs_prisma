import { z } from "zod";

export const ItemStorageFormSchema = z.object({
  name: z.string({
    required_error: "Please enter a name .",
  }),
  location: z.string({
    required_error: "Please enter a location .",
  }),
  managedLocationId: z.string({
    required_error: "Please select a location to add storage to .",
  }),
  imgUrl: z.string().nullable(),
});

export type ItemStorageFormDataType = z.infer<typeof ItemStorageFormSchema>;
