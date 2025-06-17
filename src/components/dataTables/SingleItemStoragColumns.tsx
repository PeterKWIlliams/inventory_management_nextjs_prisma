import { ColumnDef } from '@tanstack/react-table';
import { Button } from '../ui/Button';
import { ArrowUpDown } from 'lucide-react';
import Link from 'next/link';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type SingleItemStorageTableData = {
  itemName: string;
  price: number;
  itemId: string;
};

export const SingleItemStorageColumns: ColumnDef<SingleItemStorageTableData>[] =
  [
    {
      accessorKey: 'itemId',
      header: () => <div className="hidden"></div>,
      cell: () => <div className="hidden"></div>,
    },
    {
      accessorKey: 'itemName',
      header: 'Item',
      cell: ({ row }) => {
        const rowValue: string = row.getValue('itemName');
        const itemId: string = row.getValue('itemId');
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
      accessorKey: 'price',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className="float-right"
          >
            Price
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const rowValue: string = row.getValue('price');

        return <div className="float-right"> {rowValue}</div>;
      },
    },
  ];
