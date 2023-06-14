// import { ColumnDef } from "@tanstack/react-table";
// import { z } from "zod";

// // This type is used to define the shape of our data.
// // You can use a Zod schema here if you want.

// const item = z.object({
//   id: z.string(),
//   name: z.string(),
//   type: z.string(),
//   expiryDate: z.string().nullable(),
//   creationDate: z.string(),
//   purchaseLink: z.string().nullable(),
//   price: z.number(),
//   quantity: z.number(),
//   description: z.string(),
//   image: z.string(),

//   productId: z.string(),
// });

// export type ItemType = z.infer<typeof item>;

// export type Payment = {
//   id: string;
//   amount: number;
//   status: "pending" | "processing" | "success" | "failed";
//   email: string;
// };

// export const columns: ColumnDef<Payment>[] = [
//   {
//     accessorKey: "status",
//     header: "Status",
//   },
//   {
//     accessorKey: "email",
//     header: "Email",
//   },
//   {
//     accessorKey: "amount",
//     header: "Amount",
//   },
// ];
