import { User, UserSchema } from "prisma/generated/zod";
import { FC } from "react";
import Button from "./ui/Button";
import { UseFormHandleSubmit, UseFormRegister, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileFormDataType } from "~/utils/validations/add-profile";
import { z } from "zod";

interface ProfileFormProps {
  onSubmit: (data: ProfileFormDataType) => void;
  handleSubmit: UseFormHandleSubmit<ProfileFormDataType, undefined>;
  register: UseFormRegister<ProfileFormDataType>;
}

const ProfileForm: FC<ProfileFormProps> = ({
  onSubmit,
  handleSubmit,
  register,
}) => {
  return (
    <form
      className="sm:max-w-2xl md:max-w-7xl "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="-mx-3 mb-6 mt-6 flex flex-wrap">
        <div className="md:w-1/2 mb-6 w-full px-3 md:mb-0">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="first_name"
          >
            First Name
          </label>
          <input
            {...register("firstName")}
            className="mb-3 block w-full appearance-none rounded border  bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            id="first_name"
            type="text"
          />
        </div>
        <div className="md:w-1/2 w-full px-3">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="last_name"
          >
            Last Name
          </label>
          <input
            {...register("lastName")}
            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="last_name"
            type="text"
          />
        </div>
      </div>
      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="w-full px-3">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            {...register("email")}
            className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="email"
            type="email"
          />
        </div>
      </div>
      <div className="-mx-3 mb-2 flex flex-wrap">
        <div className="md:w-1/3 mb-6 w-full px-3 md:mb-0">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="city"
          >
            City
          </label>
          <input
            {...register("city")}
            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="city"
            type="text"
          />
        </div>
        <div className="md:w-1/3 mb-6 w-full px-3 md:mb-0">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="street"
          >
            Street
          </label>
          <div className="relative">
            <input
              {...register("street")}
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="user_address"
              type="text"
            />
          </div>
        </div>
        <div className="md:w-1/3 mb-6 w-full px-3 md:mb-0">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="grid-zip"
          >
            Postcode
          </label>
          <input
            {...register("postcode")}
            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="grid-zip"
            type="text"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <Button size={"lg"}>Submit</Button>
      </div>
    </form>
  );
};

export default ProfileForm;
