import Sidebar from "@/components/Sidebar";
import ProfileForm from "@/components/forms/ProfileForm";
import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiFillEnvironment } from "react-icons/ai";
import { api } from "~/utils/api";
import { type ProfileFormDataType } from "~/utils/validations/profile-form";
import Loading from "@/components/loading";

const MyProfile: NextPage = ({}) => {
  const user = useUser();

  const { data: profileData, isLoading: profileDataLoading } =
    api.user.getById.useQuery();
  const ctx = api.useContext();
  const [buttonAction, setButtonAction] = useState("UPDATE");
  const [disabled, setDisabled] = useState(true);
  const [defaultValues, setDefaultValues] = useState({} as ProfileFormDataType);

  useEffect(() => {
    const { userAddress, email, firstName, lastName } = profileData || {};
    const { street, postcode } = userAddress || {};

    setDefaultValues({
      city: street || "",
      email: email || "",
      firstName: firstName || "",
      lastName: lastName || "",
      postcode: postcode || "",
      street: street || "",
    });
  }, [profileData]);

  if (!user) return <div>you are not signed in</div>;

  const { mutate: updateUser, isLoading: isUpdating } =
    api.user.update.useMutation({
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: () => {
        toast.success("user updated");
        void ctx.user.getById.invalidate();
      },
    });

  const onSubmit = (data: ProfileFormDataType) => {
    setButtonAction("UPDATE");
    setDisabled(true);
    updateUser(data);
    setDefaultValues(data);
  };

  const onPress = () => {
    setButtonAction("SUBMIT");
    setDisabled(false);
  };
  if (profileDataLoading) return <Loading />;
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
