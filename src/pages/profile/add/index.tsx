import { useUser } from "@clerk/nextjs";
import ProfileForm from "@/components/forms/ProfileForm";
import Sidebar from "@/components/Sidebar";
import { NextPage } from "next";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiFillEnvironment } from "react-icons/ai";

import { api } from "~/utils/api";
import { ProfileFormDataType } from "~/utils/validations/profile-form";

const ProfileSetup: NextPage = () => {
  const user = useUser();

  if (!user) return <div>you are not signed in</div>;

  const addUser = api.user.add.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("user added");
    },
  });

  const onSubmit = (data: ProfileFormDataType) => {
    addUser.mutate(data);
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
