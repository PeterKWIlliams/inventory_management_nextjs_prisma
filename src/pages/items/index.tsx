import { Icons } from "components/Icons";
import Sidebar from "components/Sidebar";
import { ItemsColumns } from "components/dataTables/ItemsColumns";
import { ItemsDataTable } from "components/dataTables/ItemsDataTable";
import Link from "next/link";
import { FC } from "react";

interface ItemsProps {}

const Items: FC<ItemsProps> = ({}) => {
  return (
    <Sidebar>
      <div className="ml-10 mr-10">
        <h1 className="flex justify-center border-b-4 text-4xl"> Your Items</h1>
        <h2>
          {" "}
          <div
            className="mt-5 flex flex-shrink-0 
              text-lg"
          >
            <Link
              href="/items/add "
              className="flex flex-shrink-0 flex-row  hover:text-purple-500"
            >
              add new item
              <Icons.PlusCircle className="ml-2 mt-1 opacity-50" />
            </Link>
          </div>
        </h2>
        <div className="container mx-auto max-w-4xl py-10">
          <ItemsDataTable
            columns={ItemsColumns}
            data={[
              {
                storageName: "test",
                itemCount: 1,
                storageLocation: "test",
              },
              {
                storageName: "test2",
                itemCount: 2,
                storageLocation: "test2",
              },
              {
                storageName: "test3",
                itemCount: 3,
                storageLocation: "test3",
              },
              {
                storageName: "test4",
                itemCount: 4,
                storageLocation: "test4",
              },
              {
                storageName: "test5",
                itemCount: 5,
                storageLocation: "test5",
              },
              {
                storageName: "test6",
                itemCount: 6,
                storageLocation: "test6",
              },
              {
                storageName: "test7",
                itemCount: 7,
                storageLocation: "test7",
              },
              {
                storageName: "test8",
                itemCount: 8,
                storageLocation: "test8",
              },
              {
                storageName: "test9",
                itemCount: 9,
                storageLocation: "test9",
              },
              {
                storageName: "test10",
                itemCount: 10,
                storageLocation: "test10",
              },
              {
                storageName: "test11",
                itemCount: 11,
                storageLocation: "test11",
              },
              {
                storageName: "test12",
                itemCount: 12,
                storageLocation: "test12",
              },
              {
                storageName: "test13",
                itemCount: 13,
                storageLocation: "test13",
              },
              {
                storageName: "test14",
                itemCount: 14,
                storageLocation: "test14",
              },
              {
                storageName: "test15",
                itemCount: 15,
                storageLocation: "test15",
              },
              {
                storageName: "test16",
                itemCount: 16,
                storageLocation: "test16",
              },
              {
                storageName: "test17",
                itemCount: 17,
                storageLocation: "test17",
              },
              {
                storageName: "test18",
                itemCount: 18,
                storageLocation: "test18",
              },
              {
                storageName: "test19",
                itemCount: 19,
                storageLocation: "test19",
              },
              {
                storageName: "test20",
                itemCount: 20,
                storageLocation: "test20",
              },
            ]}
          />
        </div>
      </div>
    </Sidebar>
  );
};

export default Items;
