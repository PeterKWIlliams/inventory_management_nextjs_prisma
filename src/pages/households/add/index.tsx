import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  HouseholdFormDataType,
  addHouseholdFormValidator,
} from "~/utils/validations/add-household";
import { api } from "~/utils/api";
import toast from "react-hot-toast";
import HouseholdForm from "components/HouseHoldForm";
import Sidebar from "components/Sidebar";
import { AiFillEnvironment } from "react-icons/ai";

interface AddHouseholdProps {}

const AddHousehold: FC<AddHouseholdProps> = () => {
  const addHousehold = api.household.add.useMutation();
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<HouseholdFormDataType>({
    resolver: zodResolver(addHouseholdFormValidator),
  });
  const onSubmit = async (data: HouseholdFormDataType) => {
    try {
      addHousehold.mutate({
        name: data.name,
        street: data.street,
        postcode: data.postcode,
        city: data.city,
      });
    } catch (error) {
      toast.error("Error adding household");
      console.log("Error adding household", error);
    }
    toast.success("Household successfully added");
  };

  return (
    <Sidebar>
      <div className=" flex flex-col items-center">
        <h1 className="mb-7 text-5xl font-bold">Add Household</h1>
        <AiFillEnvironment className="mb-20 rounded bg-amber-300 text-8xl text-dark-purple" />
        <HouseholdForm
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </div>
    </Sidebar>
  );
};

export default AddHousehold;
