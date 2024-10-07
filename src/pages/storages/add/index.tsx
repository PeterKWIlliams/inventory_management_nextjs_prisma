import ItemStorageForm from "@/components/forms/ItemStorageForm";
import Sidebar from "@/components/Sidebar";
import { type FC } from "react";
import toast from "react-hot-toast";
import { AiFillEnvironment } from "react-icons/ai";
import { api } from "~/utils/api";
import { type ItemStorageFormDataType } from "~/utils/validations/add-itemStorage";

const ItemStorageSetup: FC = () => {
  const ctx = api.useUtils();
  const managedLocations = api.managedLocation.getAllForUser
    .useQuery()
    .data?.map((location) => {
      return { label: location.location.name, value: location.id };
    });
  const addItemStorage = api.itemStorage.add.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("Item Storage added!");
      void ctx.itemStorage.getAllForUser.invalidate();
    },
  });
  if (!managedLocations) return <div>no managedlocations to add </div>;

  const onSubmit = (data: ItemStorageFormDataType) => {
    addItemStorage.mutate(data);
  };

  return (
    <Sidebar>
      <div className="mt-9 flex flex-col items-center">
        <h1 className="mb-7 text-5xl font-bold">Add storage</h1>
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
