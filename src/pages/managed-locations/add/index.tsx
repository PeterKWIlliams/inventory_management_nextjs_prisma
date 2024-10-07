import { type FC } from "react";
import { api } from "~/utils/api";
import toast from "react-hot-toast";
import Sidebar from "@/components/Sidebar";
import { AiFillEnvironment } from "react-icons/ai";
import { useUser } from "@clerk/nextjs";
import { type ManagedLocationFormDataType } from "~/utils/validations/add-managedLocation";
import ManagedLocationForm from "@/components/forms/ManagedLocationForm";
import { useRouter } from "next/router";

const ManagedLocationSetup: FC = () => {
  const user = useUser();
  const userId = user.user?.id;
  const router = useRouter();
  const ctx = api.useUtils();
  if (!userId) {
    return <div>you are not signed in</div>;
  }
  const addManagedLocation = api.managedLocation.add.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      void router.push(`/managed-locations/${data.id}`);
      void ctx.managedLocation.getAllForUser.invalidate();
      toast.success("Successfully created new location.");
    },
  });

  const onSubmit = (data: ManagedLocationFormDataType) => {
    addManagedLocation.mutate({
      ...data,
      userId: userId,
    });
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
