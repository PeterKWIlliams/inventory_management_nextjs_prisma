import { z } from "zod";

export const addUserFormValidator = z.object({
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  street: z.string(),
  city: z.string(),
  postcode: z.string(),
});

export type ProfileFormDataType = z.infer<typeof addUserFormValidator>;
