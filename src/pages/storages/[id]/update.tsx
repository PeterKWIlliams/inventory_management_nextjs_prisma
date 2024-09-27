import ItemStorageForm from "@/components/forms/ItemStorageForm";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import { type FC } from "react";
import toast from "react-hot-toast";
import { AiFillEnvironment } from "react-icons/ai";
import { api } from "~/utils/api";
import { type ItemStorageFormDataType } from "~/utils/validations/add-itemStorage";

const ItemStorageSetup: FC = () => {
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
  const onSubmit = (data: ItemStorageFormDataType) => {
    updateStorage.mutate({
      ...data,
      storageId: storageId,
    });
  };

  if (!managedLocations)
    return <div>error somehow created storage without location </div>;
  return (
    <Sidebar>
      <div className="mt-9 flex flex-col items-center">
        <h1 className="mb-7 text-6xl font-bold">UPDATE STORAGE LOCATION</h1>
        <AiFillEnvironment className="mb-20 rounded bg-amber-300 text-8xl text-dark-purple" />
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
