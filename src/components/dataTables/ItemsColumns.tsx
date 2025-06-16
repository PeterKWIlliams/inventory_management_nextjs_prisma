import { type ColumnDef } from "@tanstack/react-table";
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
      const itemId: string = row.getValue("itemId");
      return (
        <Link href={`/items/${itemId}`}>
          <div className="text-blue-600 hover:font-semibold hover:text-purple-600">
            {rowValue}
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "storageName",
    header: () => <div>Storage Name</div>,
    cell: ({ row }) => {
      const rowValue: string = row.getValue("storageName");
      const storageId: string = row.getValue("storageId");
      return (
        <Link href={`/storages/${storageId}`} className="h-full grow">
          <div className=" text-blue-600 hover:font-semibold hover:text-violet-600">
            {rowValue}
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "managedLocation",
    header: () => <div>Managed Location</div>,
    cell: ({ row }) => {
      const managedLocationId: string = row.getValue("managedLocationId");
      const rowValue: string = row.getValue("managedLocation");
      return (
        <Link href={`/managed-locations/${managedLocationId}`}>
          <div className=" text-blue-600 hover:font-semibold hover:text-violet-600">
            {rowValue}
          </div>
        </Link>
      );
    },
  },
  //This is hidden as it is only used to access the storageId -look for a better solution later-.
  {
    accessorKey: "storageId",
    header: () => <div className="hidden"></div>,
    cell: () => <div className="hidden"></div>,
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
        >
          Price
          <ArrowUpDown className=" h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const rowValue: string = row.getValue("price");
      return <div className="flex  justify-center">{rowValue}</div>;
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
];
