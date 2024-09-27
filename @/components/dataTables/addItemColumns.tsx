import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import { Button } from "../ui/Button";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type AddItemTableData = {
  address: string;
  postcode: string;
  city: string;
  locationName: string;
  managedLocationId: string;
  storageName: string;
  storageId: string;
};

export const AddItemColumns: ColumnDef<AddItemTableData>[] = [
  {
    accessorKey: "storageName",
    header: () => <div className="text-left">Storage</div>,
    cell: ({ row }) => {
      const rowValue: string = row.getValue("storageName");
      const storageId: string = row.getValue("storageId");
      return (
        <Link href={`/storages/storage/${storageId}/add-item`}>
          <div className="float-left text-left text-blue-600 hover:font-semibold hover:text-purple-600 ">
            {rowValue}
          </div>
        </Link>
      );
    },
  },
  //This is hidden as it is only used to access the managedLocationId-look for a better solution later
  {
    accessorKey: "storageId",
    header: () => <div className="hidden"></div>,
    cell: () => <div className="hidden"></div>,
  },
  //This is hidden as it is only used to access the managedLocationId-look for a better solution later
  {
    accessorKey: "managedLocationId",
    header: () => <div className="hidden"></div>,
    cell: () => <div className="hidden"></div>,
  },

  {
    accessorKey: "address",
    header: () => <div className="text-right">Address</div>,
    cell: ({ row }) => {
      const rowValue: string = row.getValue("address");

      return <div className="text-right">{rowValue}</div>;
    },
  },
  {
    accessorKey: "postcode",
    header: () => <div className="text-right">Postcode</div>,
    cell: ({ row }) => {
      const rowValue: string = row.getValue("postcode");
      return <div className="text-right">{rowValue}</div>;
    },
  },
  {
    accessorKey: "locationName",
    header: () => <div className="text-right">Location Name</div>,
    cell: ({ row }) => {
      const rowValue: string = row.getValue("locationName");
      return <div className="text-right">{rowValue}</div>;
    },
  },
  {
    accessorKey: "city",
    header: () => <div className="text-right">city</div>,
    cell: ({ row }) => {
      const rowValue: string = row.getValue("city");

      return <div className="text-right">{rowValue}</div>;
    },
  },
];
