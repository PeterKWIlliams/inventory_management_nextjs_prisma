import { z } from "zod";

export const ItemFormSchema = z.object({
  name: z.string(),
  type: z.string(),
  expiryDate: z.coerce.date().nullable(),
  creationDate: z.coerce.date(),
  purchaseLink: z.string().nullable(),
  imageUrl: z.string().nullable(),
  desiredQuantity: z.number().int().nullable(),
  quantity: z.number().int().nullable(),
  storedItemId: z.string().nullable(),
  productId: z.string().nullable(),
});

export const StoredItemFormSchema = z.object({
  name: z.string(),
  type: z.string(),
  expiryDate: z.coerce.date().nullable(),
  creationDate: z.coerce.date(),
  purchaseLink: z.string().nullable(),
  imageUrl: z.string().nullable(),
  desiredQuantity: z.number().int().nullable(),
  quantity: z.number().int().nullable(),
  storedItemId: z.string().nullable(),
  productId: z.string().nullable(),
});

export const ProductFormSchema = z
  .object({
    name: z.string(),
    type: z.string(),
    creationDate: z.coerce.date(),
    purchaseLink: z.string().nullable(),
    imageUrl: z.string().nullable(),
    desiredQuantity: z.number().int().nullable(),
    storedItemId: z.string().nullable(),
    productId: z.string().nullable(),
  })
  .refine((data) => data.storedItemId != null || data.productId != null, {
    message: "Item must be either stored' or Product.",
    path: ["storedItemId", "productId"], // This can help you show the error message in the correct field
  });

const stuff = {
  name: "input",
  type: "input and select from list",
  purchaselink: "input",
  name: "input",
  name: "input",
};
