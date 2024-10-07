import { Icons } from "@/components/Icons";
import ItemStorageCard from "@/components/cards/ItemStorageCard";

import Sidebar from "@/components/Sidebar";
import { SingleStorageDataTable } from "@/components/dataTables/SingleItemStorageDataTable";
import { SingleItemStorageColumns } from "@/components/dataTables/SingleItemStoragColumns";

import Link from "next/link";

import { type GetStaticProps } from "next/types";
import { type FC } from "react";
import { api } from "~/utils/api";
import { generateSSGHelper } from "~/utils/helpers/serverSideHelper";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Loading from "@/components/loading";

interface SingleStorageProps {
  id: string;
}

const SingleStorage: FC<SingleStorageProps> = ({ id }) => {
  const { data, isLoading } = api.itemStorage.getById.useQuery(id);
  const router = useRouter();
  const ctx = api.useUtils();

  const { mutate: deleteItemStorage } = api.itemStorage.deleteById.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: async () => {
      ctx.itemStorage.getAllForUser.setData(undefined, (oldData) => {
        return oldData
          ? oldData.filter((itemStorage) => itemStorage.id !== id)
          : oldData;
      });
      void router.push("/storages");
      await ctx.itemStorage.invalidate();
      toast.success("Location Deleted");
    },
  });

  if (!data) return <div>no data</div>;
  if (isLoading) return <Loading />;

  const onClickDelete = () => {
    deleteItemStorage({ id });
  };

  const singleStorageTableData = data.storedItem.map((item) => {
    return {
      itemName: item.name,
      itemId: item.id,
      price: 50,
    };
  });

  return (
    <Sidebar>
      <h1 className="mb-20  flex  justify-center text-5xl">
        <span className="border-b border-t border-black ">{data.name}</span>
      </h1>

      <div className=" flex h-full w-full items-center justify-center ">
        <ItemStorageCard
          imgUrl={data.image_url}
          storageData={data.managedLocation}
          onClickDelete={onClickDelete}
        />
      </div>

      <div className="container mx-auto max-w-4xl py-10">
        <SingleStorageDataTable
          columns={SingleItemStorageColumns}
          data={singleStorageTableData}
        />
        <div className="mt-5 flex justify-between">
          <div>
            <Link
              href={`/storages/${id}/add-item`}
              className="flex flex-shrink-0 flex-row  hover:text-purple-500"
            >
              <Icons.PlusCircle className=" opacity-50" />
              ADD ITEM
            </Link>
          </div>
          <div>
            <Link
              href={`/storages/${id}/update`}
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

  const id = context.params?.id as string;

  await ssg.itemStorage.getById.prefetch(id);

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
