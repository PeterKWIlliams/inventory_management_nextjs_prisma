import Sidebar from "@/components/Sidebar";
import ItemStorageForm from "@/components/forms/ItemStorageForm";

import { type GetStaticProps } from "next";
import { useRouter } from "next/router";
import { type FC } from "react";
import toast from "react-hot-toast";

import { AiFillEnvironment } from "react-icons/ai";
import { api } from "~/utils/api";
import { generateSSGHelper } from "~/utils/helpers/serverSideHelper";
import { type ItemStorageFormDataType } from "~/utils/validations/add-itemStorage";
import Loading from "@/components/loading";
interface SpecificLocationAddStorageProps {
  id: string;
}

const SpecificLocationAddStorage: FC<SpecificLocationAddStorageProps> = ({
  id,
}) => {
  const { data, isLoading } = api.managedLocation.getById.useQuery(id);
  const ctx = api.useUtils();

  const router = useRouter();

  const addItemStorage = api.itemStorage.add.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      ctx.itemStorage.getAllForUser.setData(undefined, (oldData) => {
        return oldData
          ? oldData.filter((item) => item.id !== data.id)
          : oldData;
      });
      void router.push(`/storages/${data.id}`);
      toast.success("Item Storage added!");
    },
  });
  const onSubmit = (data: ItemStorageFormDataType) => {
    addItemStorage.mutate({
      location: data.location,
      name: data.name,
      managedLocationId: id,
    });
  };
  if (isLoading) return <Loading />;
  if (!data) return <div>no data</div>;

  return (
    <Sidebar>
      <div className="mt-9 flex flex-col items-center">
        <h1 className="mb-7 text-5xl font-bold">Add storage</h1>
        <AiFillEnvironment className="mb-20 rounded bg-amber-300 text-8xl text-dark-purple" />
        <ItemStorageForm
          buttonAction={"Done!"}
          onSubmit={onSubmit}
          managedLocations={[
            { label: data.location.name, value: data.location.id },
          ]}
        />
      </div>
    </Sidebar>
  );
};

export default SpecificLocationAddStorage;

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHelper();

  const id = context.params?.id as string;

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
