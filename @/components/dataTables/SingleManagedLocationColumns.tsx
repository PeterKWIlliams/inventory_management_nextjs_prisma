import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import { Button } from "../ui/Button";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type SingleManagedLocationTableData = {
  storageName: string;
  itemCount: number;
  storageLocation: string;
  storageId: string;
};

export const columns: ColumnDef<SingleManagedLocationTableData>[] = [
  //This is hidden as it is only used to access the storageId -look for a better solution later-.
  {
    accessorKey: "storageId",
    header: () => <div className="hidden"></div>,
    cell: () => <div className="hidden"></div>,
  },
  {
    accessorKey: "storageName",
    header: "Storage Name",
    cell: ({ row }) => {
      const rowValue: string = row.getValue("storageName");

      return (
        <Link href={`/storages/storage/${row.getValue("storageId")}`}>
          <div className="text-blue-600 hover:font-semibold hover:text-purple-600">
            {rowValue}
          </div>
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
