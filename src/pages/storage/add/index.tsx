import { zodResolver } from "@hookform/resolvers/zod";
import ItemStorageForm from "components/ItemStorageForm";

import { Sidebar } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { AiFillEnvironment } from "react-icons/ai";
import { api, RouterInputs } from "~/utils/api";
import {
  ItemStorageFormDataType,
  ItemStorageFormSchema,
} from "~/utils/validations/add-itemStorage";

export const itemStorageSetup = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<ItemStorageFormDataType>({
    resolver: zodResolver(ItemStorageFormSchema),
  });

  const addStorage = api.itemStorage.add.useMutation({
    onError: (error: any) => {
      console.log(error.message);
    },
  });

  const onSubmit = async (data: ItemStorageFormDataType) => {
    try {
      addStorage.mutate({
        name: data.name,
        location: data.location,
        managedLocationId: data.managedLocationId,
      });
    } catch (error) {}
  };

  return (
    <Sidebar>
      <Sidebar>
        <div className=" flex flex-col items-center">
          <h1 className="mb-7 text-5xl font-bold">Profile Setup</h1>
          <AiFillEnvironment className="text-dark-purple mb-20 rounded bg-amber-300 text-8xl" />
          <ItemStorageForm onSubmit={onSubmit} />
        </div>
      </Sidebar>
    </Sidebar>
  );
};

export default itemStorageSetup;
