import { useUser } from "@clerk/nextjs";
import ProfileForm from "components/forms/ProfileForm";
import Sidebar from "components/Sidebar";
import { NextPage } from "next";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiFillEnvironment } from "react-icons/ai";

import { api } from "~/utils/api";
import { ProfileFormDataType } from "~/utils/validations/profile-form";

interface ProfileSetupProps {}

const ProfileSetup: NextPage = ({}) => {
  const user = useUser();
  console.log(user);

  if (!user) return <div>you are not signed in</div>;

  const addUser = api.user.add.useMutation({
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: (data: any) => {
      toast.success("user added");
    },
  });

  const onSubmit = async (data: ProfileFormDataType) => {
    addUser.mutate({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      city: data.city,
      postcode: data.postcode,
      street: data.street,
    });
    return;
  };

  return (
    <Sidebar>
      <div className="mt-9 flex flex-col items-center">
        <h1 className="mb-7 text-5xl font-bold">Profile Setup</h1>
        <AiFillEnvironment className="mb-20 rounded bg-amber-300 text-8xl text-dark-purple" />
        <ProfileForm buttonAction={"Done!"} onSubmit={onSubmit} />
      </div>
    </Sidebar>
  );
};

export default ProfileSetup;
