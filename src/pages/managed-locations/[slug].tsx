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

interface singleManagedLocationProps {
  id: string;
}

const singleManagedLocation: FC<singleManagedLocationProps> = ({ id }) => {
  const { data, isLoading } = api.managedLocation.getById.useQuery(id);

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

  // const onClickDelete=()=>{
  //   api.managedLocation.
  // }

  return (
    <Sidebar>
      <div className="flex justify-center text-lg"></div>
      <div className=" flex h-full w-full items-center justify-center ">
        <SingleManagedLocationCard data={data} onClickDelete={() => {}} />
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

export default singleManagedLocation;

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
