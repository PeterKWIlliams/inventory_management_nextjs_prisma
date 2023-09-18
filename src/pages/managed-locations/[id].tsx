import { columns } from "components/dataTables/ManagedLocationColumns";
import { ManagedLocationsDataTable } from "components/dataTables/MangedLocationDataTable";
import { Icons } from "components/Icons";
import Sidebar from "components/Sidebar";
import SingleManagedLocationCard from "components/singleManagedLocationCard";

import { GetStaticProps } from "next";
import Link from "next/link";
import { FC } from "react";
import { api } from "~/utils/api";
import { generateSSGHelper } from "~/utils/helpers/serverSideHelper";

interface singleManagedLocationProps {
  id: string;
}

const singleManagedLocation: FC<singleManagedLocationProps> = ({ id }) => {
  const { data, isLoading } = api.managedLocation.getById.useQuery(id);

  if (isLoading) return <div>loading</div>;
  if (!data) return <div>no data</div>;
  console.log("this is the data im looking for", data);

  const tableData = data.itemStorage.map((storage) => {
    return {
      storageName: storage.name,
      itemCount: storage._count.storedItem,
      storageLocation: storage.location,
    };
  });

  return (
    <Sidebar>
      <div className="flex justify-center text-lg">
        <h1>{data.location.name}</h1>
      </div>

      <div className=" flex h-full w-full items-center justify-center ">
        <SingleManagedLocationCard data={data} />
      </div>

      <div className="container mx-auto max-w-4xl py-10">
        <Link
          href={`/managed-locations/${id}/addStorage`}
          className="flex flex-shrink-0 flex-row  hover:text-purple-500"
        >
          add new storage
          <Icons.PlusCircle className="ml-2 mt-1 opacity-50" />
        </Link>
        <ManagedLocationsDataTable columns={columns} data={tableData} />
      </div>
    </Sidebar>
  );
};

export default singleManagedLocation;

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHelper();

  const id = context.params?.id as string;

  await ssg.managedLocation.getById.prefetch(id);
  console.log("this is the id", id);

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