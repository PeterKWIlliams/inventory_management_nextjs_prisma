import ItemStorageForm from "components/ItemStorageForm";
import Sidebar from "components/Sidebar";
import { NextPage } from "next";
import { AiFillEnvironment } from "react-icons/ai";
import { api } from "~/utils/api";
import { ItemStorageFormDataType } from "~/utils/validations/add-itemStorage";

const itemStorageSetup: NextPage = () => {
  const addStorage = api.itemStorage.add.useMutation({
    onError: (error: any) => {
      console.log(error.message);
    },
  });

  const onSubmit = async (data: ItemStorageFormDataType) => {
    addStorage.mutate({
      name: data.name,
      location: data.location,
      managedLocationId: data.managedLocationId,
    });
  };

  return (
    <Sidebar>
      <div className=" flex flex-col items-center">
        <h1 className="mb-7 text-5xl font-bold">Profile Setup</h1>
        <AiFillEnvironment className="text-dark-purple mb-20 rounded bg-amber-300 text-8xl" />
        <ItemStorageForm buttonAction={"Submit!"} onSubmit={onSubmit} />
      </div>
    </Sidebar>
  );
};

export default itemStorageSetup;
