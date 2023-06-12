import { useUser } from "@clerk/nextjs";
import ItemStorageForm from "components/ItemStorageForm";
import Sidebar from "components/Sidebar";

import { FC } from "react";
import toast from "react-hot-toast";
import { AiFillEnvironment } from "react-icons/ai";
import { api } from "~/utils/api";
import { ItemStorageFormDataType } from "~/utils/validations/add-itemStorage";

interface ItemStorageSetupProps {}

const ItemStorageSetup: FC<ItemStorageSetupProps> = ({}) => {
  const addUser = api.itemStorage.add.useMutation({
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  const onSubmit = async (data: ItemStorageFormDataType) => {
    console.log(data);
  };
  return (
    <Sidebar>
      <div className="mt-9 flex flex-col items-center">
        <h1 className="mb-7 text-5xl font-bold"></h1>
        <AiFillEnvironment className="text-dark-purple mb-20 rounded bg-amber-300 text-8xl" />
        <ItemStorageForm buttonAction={"Done!"} onSubmit={onSubmit} />
      </div>
    </Sidebar>
  );
};

export default ItemStorageSetup;
