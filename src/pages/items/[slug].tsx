import Sidebar from "@/components/Sidebar";
import SingleItemCard from "@/components/cards/singleItemCard";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import type { FC } from "react";
import toast from "react-hot-toast";
import { AiFillEnvironment } from "react-icons/ai";
import { api } from "~/utils/api";
import { generateSSGHelper } from "~/utils/helpers/serverSideHelper";

interface SingleItemViewProps {
  id: string;
}

const SingleItemView: FC<SingleItemViewProps> = ({ id }) => {
  const { data, isLoading } = api.storedItem.getById.useQuery(id);
  const router = useRouter();

  const { mutate: deleteItem } = api.storedItem.deleteById.useMutation({
    onSuccess: async () => {
      try {
        toast.success("Items successfully deleted");
        await router.push("/items");
      } catch (error) {
        console.log("there was an issue in routing");
      }
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const onClickDelete = () => {
    deleteItem({ id });
  };

  if (!data) return <div>no data</div>;
  const itemInfo = data.ItemInfo[0];
  if (isLoading) return <div>loading...</div>;
  if (!itemInfo) return <div>no item info</div>;

  return (
    <Sidebar>
      <div className="flex flex-col items-center ">
        <h1 className="mb-7 text-5xl font-bold">{data.name}</h1>
        <AiFillEnvironment className="mb-20 rounded bg-amber-300 text-8xl text-dark-purple" />
        <div className=" inline-grid grid-cols-2 ">
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

  const slug = context.params?.slug as string;

  await ssg.storedItem.getById.prefetch(slug);

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
