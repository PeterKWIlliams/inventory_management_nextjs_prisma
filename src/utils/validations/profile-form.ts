import { z } from "zod";

export const ProfileFormSchema = z.object({
  firstName: z.string({
    required_error: "Please enter your first name .",
  }),
  lastName: z.string({
    required_error: "Please enter your last name .",
  }),
  email: z
    .string({
      required_error: "Please enter your email address .",
    })
    .email({ message: "Please enter a valid email address ." }),
  city: z.string({
    required_error: "Please enter the city of current residence .",
  }),
  postcode: z.string({
    required_error: "Please enter current postcode .",
  }),
  street: z.string({
    required_error: "Please enter current street address .",
  }),
});

export type ProfileFormDataType = z.infer<typeof ProfileFormSchema>;
