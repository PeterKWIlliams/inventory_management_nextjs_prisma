import { Icons } from "@/components/Icons";
import Sidebar from "@/components/Sidebar";
import {
  StorageColumns,
  type StorageTableData,
} from "@/components/dataTables/StorageColumns";
import { StorageDataTable } from "@/components/dataTables/StorageDataTable";
import Link from "next/link";
import { type FC } from "react";
import { api } from "~/utils/api";
import Loading from "@/components/loading";

const Index: FC = () => {
  const { data, isLoading } =
    api.managedLocation.getAllForUserWithStorage.useQuery();

  if (isLoading) return <Loading />;
  if (!data) return <div>no data</div>;
  console.log(data);

  const transformedData: StorageTableData[] = data.flatMap((item) => {
    const managedLocation = item.location.name;
    const entries: StorageTableData[] = [];

    if (item.itemStorage && item.itemStorage.length > 0) {
      for (const storage of item.itemStorage) {
        const storageName = storage.name;
        const itemCount = storage._count?.storedItem || 0;
        const storageLocation = storage.location;
        const locationId = storage.managedLocationId;
        entries.push({
          managedLocation,
          storageName,
          itemCount,
          storageLocation,
          locationId,
          storageId: storage.id,
        });
      }
    }

    return entries;
  });

  return (
    <Sidebar>
      <div className="ml-10 mr-10">
        <h1 className="flex justify-center border-b-4 text-4xl">
          {" "}
          Your storages
        </h1>
        <h2>
          {" "}
          <div
            className="mt-5 flex flex-shrink-0 
          text-lg"
          ></div>
        </h2>
      </div>

      <div className="container mx-auto max-w-4xl py-10">
        <Link
          href="/storages/add/select-location"
          className="flex  flex-row font-bold  hover:text-purple-500"
        >
          ADD NEW STORAGE
          <Icons.PlusCircle className="ml-2 mt-1 opacity-50" />
        </Link>
        <StorageDataTable columns={StorageColumns} data={transformedData} />
      </div>
    </Sidebar>
  );
};

export default Index;
