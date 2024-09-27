import { columns } from "@/components/dataTables/SingleManagedLocationColumns";
import { SingleManagedLocationsDataTable } from "@/components/dataTables/SingleMangedLocationDataTable";
import { Icons } from "@/components/Icons";
import Sidebar from "@/components/Sidebar";
import SingleManagedLocationCard from "@/components/cards/singleManagedLocationCard";
import { type GetStaticProps } from "next";
import Link from "next/link";
import { type FC } from "react";
import { api } from "~/utils/api";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { generateSSGHelper } from "~/utils/helpers/serverSideHelper";

interface SingleManagedLocationProps {
  id: string;
}

const SingleManagedLocation: FC<SingleManagedLocationProps> = ({ id }) => {
  const router = useRouter();
  const { data, isLoading } = api.managedLocation.getById.useQuery(id);
  const { mutate: deleteManagedLocation } =
    api.managedLocation.deleteById.useMutation({
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: () => {
        toast.success("Location Deleted");
        void router.push("/managed-locations");
      },
    });

  if (isLoading) return <div>loading</div>;
  if (!data) return <div>no data</div>;

  const tableData = data.itemStorage.map((storage) => {
    return {
      storageName: storage.name,
      itemCount: storage._count.storedItem,
      storageLocation: storage.location,
      storageId: storage.id,
    };
  });

  const onClickDelete = () => {
    deleteManagedLocation({ id });
  };

  return (
    <Sidebar>
      <h1 className="mb-20  flex  justify-center text-5xl">
        <span className="border-b border-t border-black ">
          {data.location.name}
        </span>
      </h1>
      <div className=" flex h-full w-full items-center justify-center ">
        <SingleManagedLocationCard data={data} onClickDelete={onClickDelete} />
      </div>
      <div className="container mx-auto max-w-4xl py-10">
        <SingleManagedLocationsDataTable columns={columns} data={tableData} />
        <div className="mt-5  flex justify-between text-blue-600">
          <div className=" ">
            <Link
              href={`/managed-locations/${id}/add-storage`}
              className="flex flex-shrink-0 flex-row  hover:text-purple-500"
            >
              <Icons.PlusCircle className=" opacity-50" />
              ADD STORAGE
            </Link>
          </div>
          <div>
            <Link
              href={`/managed-locations/${id}/update`}
              className="flex flex-shrink-0 flex-row  hover:text-purple-500"
            >
              <Icons.PlusCircle className=" opacity-50" />
              UPDATE LOCATION
            </Link>
          </div>
        </div>
      </div>{" "}
    </Sidebar>
  );
};

export default SingleManagedLocation;

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHelper();

  const id = context.params?.id as string;

  await ssg.managedLocation.getById.prefetch(id);

  return {
    props: {
      trpcState: ssg.dehydrate(),
      id,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};
