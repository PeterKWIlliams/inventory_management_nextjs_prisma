import { FC } from "react";
import { api } from "~/utils/api";
import toast from "react-hot-toast";
import Sidebar from "components/Sidebar";
import { AiFillEnvironment } from "react-icons/ai";
import { useUser } from "@clerk/nextjs";
import { ManagedLocationFormDataType } from "~/utils/validations/add-managedLocation";
import ManagedLocationForm from "components/ManagedLocationForm";

interface addManagedLocationProps {}

const ManagedLocationSetup: FC<addManagedLocationProps> = () => {
  const user = useUser();
  const userId = user.user?.id;

  if (!userId) {
    return <div>you are not signed in</div>;
  }
  const managedLocations = api.managedLocation.getAllForUser
    .useQuery()
    .data?.map((location) => {
      return { label: location.location.name, value: location.id };
    });
  const addManagedLocation = api.managedLocation.add.useMutation({
    onError: (error: any) => {
      toast.error(error.message);
      return;
    },
  });
  if (!managedLocations) return <div>no managedlocations to add </div>;

  const onSubmit = async (data: ManagedLocationFormDataType) => {
    addManagedLocation.mutate({
      userId: userId,
      name: data.name,
      city: data.city,
      postcode: data.postcode,
      street: data.street,
    });
    toast.success("Managed Location added!");
  };
  return (
    <Sidebar>
      <div className="mt-9 flex flex-col items-center">
        <h1 className="mb-7 text-5xl font-bold">Add Location</h1>
        <AiFillEnvironment className="mb-20 rounded bg-amber-300 text-8xl text-dark-purple" />
        <ManagedLocationForm buttonAction={"Done!"} onSubmit={onSubmit} />
      </div>
    </Sidebar>
  );
};

export default ManagedLocationSetup;
