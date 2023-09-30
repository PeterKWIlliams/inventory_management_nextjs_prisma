import StoredItemForm from "@/components/forms/StoredItemForm";

import { FC } from "react";
import { AiFillEnvironment } from "react-icons/ai";
import { api } from "~/utils/api";
import { StoredItemFormDataType } from "~/utils/validations/item-form";
import Sidebar from "@/components/Sidebar";
import toast from "react-hot-toast";

const AddItem: FC = () => {
  const addItem = api.storedItem.add.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (data: StoredItemFormDataType) => {
    addItem.mutate({
      ...data,
      itemStorageId: "jdajfj",
    });
  };
  return (
    <Sidebar>
      <div className="flex flex-col items-center justify-around">
        <h1 className="mb-1 text-5xl font-bold">add items</h1>
        <AiFillEnvironment className="mb-4 rounded bg-amber-300 text-8xl text-dark-purple" />
        <StoredItemForm onSubmit={onSubmit} />
      </div>
    </Sidebar>
  );
};

export default AddItem;
