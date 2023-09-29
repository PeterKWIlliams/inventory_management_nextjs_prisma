import { useUser } from "@clerk/nextjs";
import ItemStorageForm from "@/components/forms/ItemStorageForm";
import Sidebar from "@/components/Sidebar";
import { add } from "date-fns";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

import { FC } from "react";
import toast from "react-hot-toast";
import { AiFillEnvironment } from "react-icons/ai";
import { u } from "uploadthing/types-542f56b3";
import { api } from "~/utils/api";
import { generateSSGHelper } from "~/utils/helpers/serverSideHelper";
import {
  ItemStorageFormDataType,
  UpdateItemStorageFormDataType,
} from "~/utils/validations/add-itemStorage";

interface ItemStorageSetupProps {}

const ItemStorageSetup: FC<ItemStorageSetupProps> = ({}) => {
  const router = useRouter();
  const storageId = router.query.id as string;

  const managedLocations = api.managedLocation.getAllForUser
    .useQuery()
    .data?.map((location) => {
      return { label: location.location.name, value: location.id };
    });

  const updateStorage = api.itemStorage.update.useMutation({
    onSuccess: () => {
      toast.success("Storage Updated Successfully");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });
  const onSubmit = async (data: ItemStorageFormDataType) => {
    updateStorage.mutate({
      name: data.name,
      location: data.location,
      managedLocationId: data.managedLocationId,
      storageId: storageId,
    });
  };

  if (!managedLocations)
    return <div>error somehow created storage without location </div>;
  return (
    <Sidebar>
      <div className="mt-9 flex flex-col items-center">
        <h1 className="mb-7 text-6xl font-bold">UPDATE STORAGE LOCATION</h1>
        <AiFillEnvironment className="text-dark-purple mb-20 rounded bg-amber-300 text-8xl" />
        <ItemStorageForm
          managedLocations={managedLocations}
          buttonAction={"Done!"}
          onSubmit={onSubmit}
        />
      </div>
    </Sidebar>
  );
};

export default ItemStorageSetup;
