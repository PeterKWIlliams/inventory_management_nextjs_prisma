import { type FC, useEffect, useState } from "react";
import { api } from "~/utils/api";
import toast from "react-hot-toast";
import Sidebar from "@/components/Sidebar";
import { AiFillEnvironment } from "react-icons/ai";
import { type ManagedLocationFormDataType } from "~/utils/validations/add-managedLocation";
import ManagedLocationForm from "@/components/forms/ManagedLocationForm";
import { useRouter } from "next/router";
import { generateSSGHelper } from "~/utils/helpers/serverSideHelper";
import { type GetStaticProps } from "next";
import Loading from "@/components/loading";

interface updateManagedLocationProps {
  id: string;
}

const UpdateManagedLocation: FC<updateManagedLocationProps> = ({ id }) => {
  const router = useRouter();
  const { data: managedLocation, isLoading } =
    api.managedLocation.getById.useQuery(id);
  const [defaultValues, setDefaultValues] = useState(
    {} as ManagedLocationFormDataType
  );

  useEffect(() => {
    setDefaultValues({
      city: managedLocation?.location.address.city || "",
      name: managedLocation?.location.name || "",
      postcode: managedLocation?.location.address.postcode || "",
      street: managedLocation?.location.address.street || "",
    });
  }, [managedLocation]);

  const updateManagedLocation = api.managedLocation.update.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      void router.push(`/managed-locations/${id}`);
      toast.success("Managed Location updated!");
    },
  });

  const onSubmit = (data: ManagedLocationFormDataType) => {
    updateManagedLocation.mutate({
      ...data,
      managedLocationId: id,
    });
  };

  if (isLoading) return <Loading />;

  return (
    <Sidebar>
      <div className="mt-9 flex flex-col items-center">
        <h1 className="mb-7 text-5xl font-bold">Update Location</h1>
        <AiFillEnvironment className="mb-20 rounded bg-amber-300 text-8xl text-dark-purple" />
        <ManagedLocationForm
          defaultValues={defaultValues}
          buttonAction={"Update"}
          onSubmit={onSubmit}
        />
      </div>
    </Sidebar>
  );
};

export default UpdateManagedLocation;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const ssg = generateSSGHelper();

  await ssg.managedLocation.getById.prefetch(id);

  return {
    props: {
      trpcState: ssg.dehydrate(),
      id: context.params?.id,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};
