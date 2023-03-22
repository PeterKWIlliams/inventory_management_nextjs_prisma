import { z } from "zod";

export const zodSchemas = {
  addressSchema() {
    return z.object({
      postcode: z.string(),
      street: z.string(),
      city: z.string(),
    });
  },
  userSchema() {
    return z.object({
      id: z.number(),
      name: z.string(),
      email: z.string(),
    });
  },
  itemSchema() {
    return z.object({
      name: z.string(),
      purchase_link: z.string(),
      image_url: z.string(),
      price: z.number(),
    });
  },

  managementSchema() {
    return z.object({});
  },
};
