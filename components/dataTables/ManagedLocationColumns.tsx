import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import { Button } from "../ui/Button";
import { ArrowUpDown } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type ManagedLocationTableData = {
  storageName: string;
  itemCount: number;
  storageLocation: string;
};

export const columns: ColumnDef<ManagedLocationTableData>[] = [
  {
    accessorKey: "storageName",
    header: "Storage Name",
    cell: ({ row }) => {
      const rowValue: string = row.getValue("storageName");

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
