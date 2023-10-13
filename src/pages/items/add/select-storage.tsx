import Sidebar from "@/components/Sidebar";
import { AddItemColumns } from "@/components/dataTables/addItemColumns";
import { AddItemmDataTable } from "@/components/dataTables/addItemDataTable";
import { FC } from "react";
import { api } from "~/utils/api";
import type { AddItemTableData } from "@/components/dataTables/addItemColumns";
import type { NextPage } from "next";

const selectStorage: NextPage = () => {
  const { data, isLoading, error } = api.itemStorage.getAllForUser.useQuery();

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

  return (
    <Sidebar>
      <div className="ml-10 mr-10">
        <h1 className="flex justify-center border-b-4 text-4xl">
          {" "}
          Select Location To add Storage
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
        <AddItemmDataTable columns={AddItemColumns} data={transformedData} />
      </div>
    </Sidebar>
  );
};

export default selectStorage;
