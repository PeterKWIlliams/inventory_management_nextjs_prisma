import { z } from "zod";

export const ItemStorageFormSchema = z.object({
  name: z.string({
    required_error: "Please enter a name .",
  }),
  location: z.string({
    required_error: "please enter a location.",
  }),
  managedLocationId: z
    .string({
      required_error: "Please enter current street address .",
    })
    .cuid(),
});

export type ItemStorageFormDataType = z.infer<typeof ItemStorageFormSchema>;

export const UpdateItemStorageFormSchema = ItemStorageFormSchema.extend({
  storageId: z.string(),
});

export type UpdateItemStorageFormDataType = z.infer<
  typeof UpdateItemStorageFormSchema
>;
