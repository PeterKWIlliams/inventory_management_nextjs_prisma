import { check } from "prettier";
import { z } from "zod";

export const StoredItemFormSchema = z.object({
  name: z.string(),
  purchaseDate: z.coerce.date(),
  purchasePrice: z.coerce.number(),
  desiredQuantity: z.coerce.number(),
  baseItemName: z.string(),
  baseType: z.string(),
  expiryDate: z.coerce.date(),
  supplierName: z.string(),
});
export type StoredItemFormDataType = z.infer<typeof StoredItemFormSchema>;

export const ProductFormSchema = z.object({
  name: z.string(),
  type: z.string(),
  price: z.number(),
  supplierId: z.string(),
  productId: z.string(),
  baseItemId: z.string(),
});

export type ProductFormDataType = z.infer<typeof ProductFormSchema>;

export const SupplierFormSchema = z.object({
  name: z.string(),
  street: z.string().nullable(),
  city: z.string().nullable(),
  postcode: z.string().nullable(),
});
