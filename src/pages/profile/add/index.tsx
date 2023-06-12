import { useUser } from "@clerk/nextjs";
import ProfileForm from "components/ProfileForm";
import Sidebar from "components/Sidebar";
import { NextPage } from "next";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiFillEnvironment } from "react-icons/ai";

import { api } from "~/utils/api";
import { ProfileFormDataType } from "~/utils/validations/add-profile";

interface ProfileSetupProps {}

const ProfileSetup: NextPage = ({}) => {
  const user = useUser();
  const userId = user.user?.id;

  if (!userId) {
    return <div>you are not signed in</div>;
  }
  const addUser = api.user.add.useMutation({
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  const onSubmit = async (data: ProfileFormDataType) => {
    addUser.mutate({
      userId: userId,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      city: data.city,
      postcode: data.postcode,
      street: data.street,
    });
  };
  return (
    <Sidebar>
      <div className="mt-9 flex flex-col items-center">
        <h1 className="mb-7 text-5xl font-bold">Profile Setup</h1>
        <AiFillEnvironment className="text-dark-purple mb-20 rounded bg-amber-300 text-8xl" />
        <ProfileForm buttonAction={"Done!"} onSubmit={onSubmit} />
      </div>
    </Sidebar>
  );
};

export default ProfileSetup;
