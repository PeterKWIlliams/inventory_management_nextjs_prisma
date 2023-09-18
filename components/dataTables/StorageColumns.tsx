import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import { Button } from "../ui/Button";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type StorageTableData = {
  managedLocation: string;
  storageName: string;
  itemCount: number;
  storageLocation: string;
  locationId: string;
  storageId: string;
};

export const StorageColumns: ColumnDef<StorageTableData>[] = [
  {
    accessorKey: "managedLocation",
    header: () => <div className="text-left">managed location</div>,
    cell: ({ row }) => {
      const rowValue: string = row.getValue("managedLocation");

      return (
        <Link href={`/managed-locations/${row.getValue("locationId")}`}>
          <div className="float-left hover:text-violet-600">{rowValue}</div>
        </Link>
      );
    },
  },
  //This is hidden as it is used only to access the locationId -look for a better solution later-.
  {
    accessorKey: "locationId",
    header: () => <div className="hidden text-left"></div>,
    cell: ({ row }) => {
      const rowValue: string = row.getValue("managedLocation");

      return <div className="hidden"></div>;
    },
  },
  //This is hidden as it is only used to access the storageId -look for a better solution later-.
  {
    accessorKey: "storageId",
    header: () => <div className="hidden"></div>,
    cell: ({ row }) => {
      const rowValue: string = row.getValue("managedLocation");

      return <div className="hidden"></div>;
    },
  },
  {
    accessorKey: "storageName",
    header: () => <div className=" text-right">Storage Name</div>,
    cell: ({ row }) => {
      const rowValue: string = row.getValue("storageName");

      return (
        <Link href={`/storage/${row.getValue("storageId")}`}>
          <div className="text-right  hover:text-violet-600">{rowValue}</div>
        </Link>
      );
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
    accessorKey: "itemCount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="float-right"
        >
          Item Count
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const rowValue: string = row.getValue("itemCount");

      return <div className="text-right">{rowValue}</div>;
    },
  },
];
