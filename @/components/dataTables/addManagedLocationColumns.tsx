import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type AddManagedLocationTableData = {
  address: string;
  postcode: string;
  city: string;
  locationName: string;
  managedLocationId: string;
};

export const addManagedLocationsColumns: ColumnDef<AddManagedLocationTableData>[] =
  [
    {
      accessorKey: "locationName",
      header: () => <div className="text-left">Managed Location</div>,
      cell: ({ row }) => {
        const rowValue: string = row.getValue("locationName");

        return (
          <Link
            href={`/managed-locations/maanged-location/${row.getValue(
              "managedLocationId"
            )}/addStorage`}
          >
            <div className="float-left text-left text-blue-600 hover:font-semibold hover:text-purple-600 ">
              {rowValue}
            </div>
          </Link>
        );
      },
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
      accessorKey: "city",
      header: () => <div className="text-right">city</div>,
      cell: ({ row }) => {
        const rowValue: string = row.getValue("city");

        return <div className="text-right">{rowValue}</div>;
      },
    },
  ];
