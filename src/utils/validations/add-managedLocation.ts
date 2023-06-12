import { z } from "zod";

export const ManagedLocationFormSchema = z.object({
  name: z.string({
    required_error: "Please enter a name .",
  }),
  street: z.string({
    required_error: "Please enter your last name .",
  }),
  city: z.string({
    required_error: "Please enter your email address .",
  }),
  postcode: z.string({
    required_error: "Please enter the city of current residence .",
  }),
});

export type ManagedLocationFormDataType = z.infer<
  typeof ManagedLocationFormSchema
>;
