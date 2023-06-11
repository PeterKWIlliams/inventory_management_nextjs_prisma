import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { api } from "~/utils/api";
import toast from "react-hot-toast";
import Sidebar from "components/Sidebar";
import { AiFillEnvironment } from "react-icons/ai";
import { useUser } from "@clerk/nextjs";
import {
  ManagedLocationFormDataType,
  addManagedLocationFormValidator,
} from "~/utils/validations/add-managedLocation";
import ManagedLocationForm from "components/ManagedLocationForm";

interface addManagedLocationProps {}

const addManagedLocation: FC<addManagedLocationProps> = () => {
  const userId = useUser().user?.id;

  if (!userId) return <div>you are not signed in</div>;
  const addManagedLocation = api.managedLocation.add.useMutation();
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<ManagedLocationFormDataType>({
    resolver: zodResolver(addManagedLocationFormValidator),
  });

  const onSubmit = async (data: ManagedLocationFormDataType) => {
    try {
      addManagedLocation.mutate({
        name: data.name,
        street: data.street,
        postcode: data.postcode,
        city: data.city,
        userId: userId,
      });
    } catch (error) {
      toast.error("Error adding household");
    }
  };

  return (
    <Sidebar>
      <div className=" flex flex-col items-center">
        <h1 className="mb-7 text-5xl font-bold">Add Household</h1>
        <AiFillEnvironment className="mb-20 rounded bg-amber-300 text-8xl text-dark-purple" />
        <ManagedLocationForm
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </div>
    </Sidebar>
  );
};

export default addManagedLocation;
