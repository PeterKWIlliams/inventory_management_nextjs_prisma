import { useUser } from "@clerk/nextjs";
import { Address, User } from "@prisma/client";
import ProfileForm from "components/ProfileForm";
import Sidebar from "components/Sidebar";
import { create } from "domain";
import { NextPage } from "next";

import { AiFillEnvironment } from "react-icons/ai";
import { api } from "~/utils/api";
import { ProfileFormDataType } from "~/utils/validations/add-profile";

interface profileSetupProps {}

const profilesetup: NextPage = ({}) => {
  const user = useUser();
  const userId = user.user?.id;

  if (!userId) {
    return <div>no userID</div>;
  }

  const addUser = api.user.add.useMutation();

  const onSubmit = async (data: ProfileFormDataType) => {
    if (!userId) return;
    addUser.mutate({
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      clerkId: userId,
      city: data.city,
      postcode: data.postcode,
      street: data.street,
    });
  };

  return (
    <Sidebar>
      <div className=" flex flex-col items-center">
        <h1 className="mb-7 text-5xl font-bold">Profile Setup</h1>
        <AiFillEnvironment className="mb-20 rounded bg-amber-300 text-8xl text-dark-purple" />
        <ProfileForm onSubmit={onSubmit} />
      </div>
    </Sidebar>
  );
};

export default profilesetup;
