import { Icons } from "@/components/Icons";
import ItemStorageCard from "@/components/cards/ItemStorageCard";

import Sidebar from "@/components/Sidebar";
import { SingleStorageDataTable } from "@/components/dataTables/SingleItemStorageDataTable";
import { SingleItemStorageColumns } from "@/components/dataTables/SingleItemStoragColumns";

import Link from "next/link";

import { GetStaticProps } from "next/types";
import { FC } from "react";
import { api } from "~/utils/api";
import { generateSSGHelper } from "~/utils/helpers/serverSideHelper";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

interface SingleStorageProps {
  id: string;
}

const SingleStorage: FC<SingleStorageProps> = ({ id }) => {
  const router = useRouter();
  const { data, isLoading } = api.itemStorage.getById.useQuery(id);
  const { mutate: deleteItemStorage } = api.itemStorage.deleteById.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {

        toast.success("Location Deleted");
        void router.push("/storages");
   
      

    },
  });

  if (!data) return <div>no data</div>;
  if (isLoading) return <div>loading</div>;

  const onClickDelete = () => {
    deleteItemStorage({ id });
  };

  const realData = data.managedLocation;
  const singleStorageTableData = data.storedItem.map((item) => {
    return {
      itemName: item.name,
      itemId: item.id,
      price: 50,
    };
  });

  return (
    <Sidebar>
      <div className="flex justify-center text-lg">
        <h1>{data.name}</h1>
      </div>

      <div className=" flex h-full w-full items-center justify-center ">
        <ItemStorageCard realData={realData} onClickDelete={onClickDelete} />
      </div>

      <div className="container mx-auto max-w-4xl py-10">
        <SingleStorageDataTable
          columns={SingleItemStorageColumns}
          data={singleStorageTableData}
        />
        <div className="mt-5 flex justify-between">
          <div>
            <Link
              href={`/storages/storage/${id}/add-item`}
              className="flex flex-shrink-0 flex-row  hover:text-purple-500"
            >
              <Icons.PlusCircle className=" opacity-50" />
              ADD ITEM
            </Link>
          </div>
          <div>
            <Link
              href={`/storages/storage/${id}/update`}
              className="flex flex-shrink-0 flex-row  hover:text-purple-500"
            >
              <Icons.PlusCircle className=" opacity-50" />
              UPDATE STORAGE
            </Link>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default SingleStorage;

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHelper();

  const slug = context.params?.slug as string;

  await ssg.itemStorage.getById.prefetch(slug);

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
