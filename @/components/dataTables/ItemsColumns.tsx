import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import { Button } from "../ui/Button";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type ItemsTableData = {
  itemName: string;
  price?: number;
  storageName: string;
  managedLocation: string;
  storageId: string;
  managedLocationId: string;
  itemId: string;
};

export const ItemsColumns: ColumnDef<ItemsTableData>[] = [
  {
    accessorKey: "itemName",
    header: "Item",
    cell: ({ row }) => {
      const rowValue: string = row.getValue("itemName");

      return (
        <Link href={`/items/${row.getValue("itemId")}`}>
          <div className="text-blue-600 hover:font-semibold hover:text-purple-600">
            {rowValue}
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "itemId",
    header: () => <div className="hidden"></div>,
    cell: () => <div className="hidden"></div>,
  },
  //This is hidden as it is only used to access the storageId -look for a better solution later-.
  {
    accessorKey: "managedLocationId",
    header: () => <div className="hidden"></div>,
    cell: () => <div className="hidden"></div>,
  },
  {
    accessorKey: "managedLocation",
    header: () => <div className="text-right">Managed Location</div>,
    cell: ({ row }) => {
      const rowValue: string = row.getValue("managedLocation");

      return <div className="text-right">{rowValue}</div>;
    },
  },
  //This is hidden as it is only used to access the storageId -look for a better solution later-.
  {
    accessorKey: "storageId",
    header: () => <div className="hidden"></div>,
    cell: () => <div className="hidden"></div>,
  },
  {
    accessorKey: "storageName",
    header: () => <div className="text-right">Storage Name</div>,
    cell: ({ row }) => {
      const rowValue: string = row.getValue("storageName");

      return <div className="text-right">{rowValue}</div>;
    },
  },
  {
    accessorKey: "storageLocation",
    header: "storage location",
    cell: ({ row }) => {
      const rowValue: string = row.getValue("storageLocation");

      return <div>{rowValue}</div>;
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
