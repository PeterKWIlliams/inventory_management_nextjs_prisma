import { z } from "zod";

export const addUserFormValidator = z.object({
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  street: z.string(),
  city: z.string(),
  postcode: z.string(),
});

export type ProfileFormDataType = z.infer<typeof addUserFormValidator>;
