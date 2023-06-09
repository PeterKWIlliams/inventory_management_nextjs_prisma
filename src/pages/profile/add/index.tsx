import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import ProfileForm from "components/ProfileForm";
import Sidebar from "components/Sidebar";
import { NextPage } from "next";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { AiFillEnvironment } from "react-icons/ai";
import { prisma } from "~/server/db";
import { api } from "~/utils/api";

import {
  ProfileFormDataType,
  addUserFormValidator,
} from "~/utils/validations/add-profile";

interface profileSetupProps {}

const profilesetup: NextPage = ({}) => {
  const user = useUser();
  const userId = user.user?.id;

  if (!userId) {
    return <div>you are not signed in</div>;
  }

  const addUser = api.user.add.useMutation();
  const [success, setSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<any>(
    "this is the error message if there is one"
  );
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormDataType>({
    resolver: zodResolver(addUserFormValidator),
  });

  const onSubmit = async (data: ProfileFormDataType) => {
    if (!userId) return;

    try {
      const toastError = addUser.mutate({
        userId: userId,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        city: data.city,
        postcode: data.postcode,
        street: data.street,
      });
    } catch (error) {}
  };

  return (
    <Sidebar>
      <div className=" flex flex-col items-center">
        <h1 className="mb-7 text-5xl font-bold">Profile Setup</h1>
        <AiFillEnvironment className="mb-20 rounded bg-amber-300 text-8xl text-dark-purple" />
        <ProfileForm
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          register={register}
        />
      </div>
    </Sidebar>
  );
};

export default profilesetup;
