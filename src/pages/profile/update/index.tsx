import ProfileForm from "components/ProfileForm";
import Sidebar from "components/Sidebar";
import { NextPage } from "next";
import toast from "react-hot-toast";
import { AiFillEnvironment } from "react-icons/ai";
import { api } from "~/utils/api";
import { ProfileFormDataType } from "~/utils/validations/profile-form";

interface ProfileUpdateSetupProps {}

const ProfileUpdate: NextPage = ({}) => {
  const profileData = api.user.getById.useQuery().data;
  const updateUser = api.user.update.useMutation({
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: (data: any) => {
      toast.success("user updated");
    },
  });

  if (!profileData) return <div>set up profile please</div>;
  const flattenProfileData = { ...profileData, ...profileData.userAddress };
  if (!flattenProfileData) return <div>loaging</div>;

  const onSubmit = async (data: ProfileFormDataType) => {
    updateUser.mutate({
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
        <ProfileForm
          defaultValues={flattenProfileData}
          buttonAction={"Update!"}
          onSubmit={onSubmit}
        />
      </div>
    </Sidebar>
  );
};

export default ProfileUpdate;