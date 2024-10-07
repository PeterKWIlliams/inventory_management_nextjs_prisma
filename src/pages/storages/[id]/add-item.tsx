import Sidebar from "@/components/Sidebar";
import StoredItemForm from "@/components/forms/StoredItemForm";
import { useRouter } from "next/router";
import { type FC } from "react";
import toast from "react-hot-toast";
import { AiFillEnvironment } from "react-icons/ai";
import { api } from "~/utils/api";
import { type StoredItemFormDataType } from "~/utils/validations/item-form";

const AddItem: FC = () => {
  const router = useRouter();
  const storageId = router.query.id as string;
  const ctx = api.useUtils();
  const addItem = api.storedItem.add.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      void router.push(`/storages/${storageId}`);
      void ctx.storedItem.getAllForUser.invalidate();
      toast.success("Item added!");
    },
  });

  if (!storageId) return <div>go back</div>;

  const onSubmit = (data: StoredItemFormDataType) => {
    addItem.mutate({
      ...data,
      itemStorageId: storageId,
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
