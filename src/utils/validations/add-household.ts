import { z } from "zod";

export const addHouseholdFormValidator = z.object({
  name: z.string(),
  street: z.string(),
  city: z.string(),
  postcode: z.string(),
});

export type HouseholdFormDataType = z.infer<typeof addHouseholdFormValidator>;
