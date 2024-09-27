import Sidebar from "@/components/Sidebar";
import { AddItemColumns } from "@/components/dataTables/addItemColumns";
import { AddItemDataTable } from "@/components/dataTables/addItemDataTable";

import { api } from "~/utils/api";
import type { AddItemTableData } from "@/components/dataTables/addItemColumns";
import type { NextPage } from "next";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/router";

const SelectStorage: NextPage = () => {
  const { data, isLoading } = api.itemStorage.getAllForUser.useQuery();
  const router = useRouter();

  if (isLoading) return <div>loading</div>;
  if (!data) return <div>no data</div>;
  console.log(data);

  const transformedData: AddItemTableData[] = data.map((data) => {
    return {
      storageName: data.name,
      storageId: data.id,
      managedLocationId: data.managedLocationId,
      address: data.managedLocation.location.address.street,
      postcode: data.managedLocation.location.address.postcode,
      city: data.managedLocation.location.address.city,
      locationName: data.managedLocation.location.name,
    };
  });

  if (data.length < 1) {
    return (
      <Sidebar>
        <div className="ml-10 mr-10">
          <h1 className="flex justify-center border-b-4 text-4xl">
            YOU HAVE NO STORAGE
          </h1>
          <h2>
            <div className="mt-5 flex flex-shrink-0 text-lg"></div>
          </h2>
        </div>

        <div className="flex h-48 items-center justify-center">
          <Button
            onClick={() => {
              void router.push("/storages/add/select-location");
            }}
          >
            Click to add storage
          </Button>
        </div>
      </Sidebar>
    );
  }

  return (
    <Sidebar>
      <div className="ml-10 mr-10">
        <h1 className="flex justify-center border-b-4 text-4xl">
          SELECT STORAGE TO ADD ITEM TO
        </h1>
        <h2>
          <div className="mt-5 flex flex-shrink-0 text-lg"></div>
        </h2>
      </div>

      <div className="container mx-auto max-w-4xl py-10">
        <AddItemDataTable columns={AddItemColumns} data={transformedData} />
      </div>
    </Sidebar>
  );
};

export default SelectStorage;
