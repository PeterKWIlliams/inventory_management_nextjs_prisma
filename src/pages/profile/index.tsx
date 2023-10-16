import Sidebar from "@/components/Sidebar";
import ProfileForm from "@/components/forms/ProfileForm";
import { useUser } from "@clerk/nextjs";
import { profile } from "console";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiFillEnvironment } from "react-icons/ai";
import { api } from "~/utils/api";
import {
  ProfileFormDataType,
  ProfileFormSchema,
} from "~/utils/validations/profile-form";

const MyProfile: NextPage = ({}) => {
  const user = useUser();

  const {
    data: profileData,
    isLoading: profileDataLoading,
    isFetched,
  } = api.user.getById.useQuery();

  const [buttonAction, setButtonAction] = useState("UPDATE");

  const [disabled, setDisabled] = useState(true);

  const [defaultValues, setDefaultValues] = useState({} as ProfileFormDataType);

  if (!user) return <div>you are not signed in</div>;

  const { mutate: updateUser, isLoading: isUpdating } =
    api.user.update.useMutation({
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: () => {
        toast.success("user updated");
      },
    });
  useEffect(() => {
    setDefaultValues({
      city: profileData?.userAddress?.street || "",
      email: profileData?.email || "",
      firstName: profileData?.firstName || "",
      lastName: profileData?.lastName || "",
      postcode: profileData?.userAddress?.postcode || "",
      street: profileData?.userAddress?.street || "",
    });
  }, [profileDataLoading]);

  const onSubmit = (data: ProfileFormDataType) => {
    setButtonAction("UPDATE");
    setDisabled(true);
    updateUser(data);
  };

  const onPress = () => {
    setButtonAction("SUBMIT");
    setDisabled(false);
  };
  if (profileDataLoading) return <div>Loading</div>;
  return (
    <Sidebar>
      <div className="mt-9 flex flex-col items-center">
        <h1 className="mb-7 text-5xl font-bold">PROFILE</h1>
        <AiFillEnvironment className="mb-20 rounded bg-amber-300 text-8xl text-dark-purple" />
        <ProfileForm
          buttonAction={buttonAction}
          onPress={onPress}
          onSubmit={onSubmit}
          disabled={disabled}
          defaultValues={defaultValues}
          isUpdating={isUpdating}
        />
      </div>
    </Sidebar>
  );
};

export default MyProfile;
