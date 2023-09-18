import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import { Button } from "../ui/Button";
import { ArrowUpDown } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type ItemsTableData = {
  Item: string;
  storageName: string;
  price: number;
  storageLocation: string;
};

export const ItemsColumns: ColumnDef<ItemsTableData>[] = [
  {
    accessorKey: "Item",
    header: "Item",
    cell: ({ row }) => {
      const rowValue: string = row.getValue("Item");

      return <div>{rowValue}</div>;
    },
  },
  {
    accessorKey: "storageLocation",
    header: () => <div className="text-right">Storage Location</div>,
    cell: ({ row }) => {
      const rowValue: string = row.getValue("storageLocation");

      return <div className="text-right">{rowValue}</div>;
    },
  },
  {
    accessorKey: "storageName",
    header: () => <div className="text-right">Storage Location</div>,
    cell: ({ row }) => {
      const rowValue: string = row.getValue("storageName");

      return <div className="text-right">{rowValue}</div>;
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="float-right"
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const rowValue: string = row.getValue("price");

      return <div className="text-right">{rowValue}</div>;
    },
  },
];
