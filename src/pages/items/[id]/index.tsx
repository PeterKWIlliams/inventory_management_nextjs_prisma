import Sidebar from "@/components/Sidebar";
import SingleItemCard from "@/components/cards/singleItemCard";
import type { GetStaticProps } from "next";
import { useRouter } from "next/router";
import type { FC } from "react";
import toast from "react-hot-toast";
import { api } from "~/utils/api";
import { generateSSGHelper } from "~/utils/helpers/serverSideHelper";
import Loading from "@/components/loading";

interface SingleItemViewProps {
  id: string;
}

const SingleItemView: FC<SingleItemViewProps> = ({ id }) => {
  const { data, isLoading } = api.storedItem.getById.useQuery(id);
  const router = useRouter();
  const ctx = api.useUtils();

  const { mutate: deleteItem } = api.storedItem.deleteById.useMutation({
    onSuccess: () => {
      ctx.storedItem.getAllForUser.setData(undefined, (oldData) => {
        return oldData ? oldData.filter((item) => item.id !== id) : oldData;
      });
      void ctx.storedItem.invalidate();
      void router.push("/items");
      toast.success("Items successfully deleted");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const onClickDelete = () => {
    deleteItem({ id });
  };
  if (!data) return <Loading />;
  const itemInfo = data.ItemInfo[0];

  if (isLoading) return <Loading />;
  if (!itemInfo) return <div>no item info</div>;

  return (
    <Sidebar>
      <div className="flex flex-col items-center ">
        <h1 className="mb-20  flex  justify-center text-5xl">
          <span className="border-b border-t border-black ">{data.name}</span>
        </h1>
        <div className="flex flex-col">
          Add Picture
          <SingleItemCard
            itemName={data.name}
            itemInfo={itemInfo}
            onClickDelete={onClickDelete}
          />
        </div>
      </div>
    </Sidebar>
  );
};

export default SingleItemView;

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHelper();

  const id = context.params?.id as string;

  await ssg.storedItem.getById.prefetch(id);

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
