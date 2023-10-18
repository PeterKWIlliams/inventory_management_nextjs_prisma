import { columns } from "@/components/dataTables/SingleManagedLocationColumns";
import { SingleManagedLocationsDataTable } from "@/components/dataTables/SingleMangedLocationDataTable";
import { Icons } from "@/components/Icons";
import Sidebar from "@/components/Sidebar";
import SingleManagedLocationCard from "@/components/cards/singleManagedLocationCard";

import { GetStaticProps } from "next";
import Link from "next/link";
import { FC } from "react";
import { api } from "~/utils/api";
import { generateSSGHelper } from "~/utils/helpers/serverSideHelper";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

interface SingleManagedLocationProps {
  id: string;
}

const SingleManagedLocation: FC<SingleManagedLocationProps> = ({ id }) => {
  const router = useRouter();
  // const ctx = api.useContext()
  const { data, isLoading } = api.managedLocation.getById.useQuery(id);
  const { mutate: deleteManagedLocation, isLoading: isDeleting } =
    api.managedLocation.deleteById.useMutation({
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: async () => {
        try {
          toast.success("Location Deleted");
          await router.push("/managed-locations");
        } catch (error) {
          toast.error("there was an issue in routing");
        }
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
      <div className="flex justify-center text-lg"></div>
      <div className=" flex h-full w-full items-center justify-center ">
        <SingleManagedLocationCard data={data} onClickDelete={onClickDelete} />
      </div>
      <div className="container mx-auto max-w-4xl py-10">
        {" "}
        <SingleManagedLocationsDataTable columns={columns} data={tableData} />
        <div className="mt-5  flex justify-between text-blue-600">
          <div className=" ">
            <Link
              href={`/managed-locations/managed-location/${id}/addStorage`}
              className="flex flex-shrink-0 flex-row  hover:text-purple-500"
            >
              <Icons.PlusCircle className=" opacity-50" />
              ADD STORAGE
            </Link>
          </div>
          <div>
            <Link
              href={`/managed-locations/managed-location/${id}/update`}
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

  const slug = context.params?.slug as string;

  await ssg.managedLocation.getById.prefetch(slug);

  return {
    props: {
      trpcState: ssg.dehydrate(),
      id: context.params?.slug,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};
