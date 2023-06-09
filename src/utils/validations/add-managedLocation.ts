import { z } from "zod";

export const addManagedLocationFormValidator = z.object({
  name: z.string(),
  street: z.string(),
  city: z.string(),
  postcode: z.string(),
});

export type ManagedLocationFormDataType = z.infer<
  typeof addManagedLocationFormValidator
>;
