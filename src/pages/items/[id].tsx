import Sidebar from "@/components/Sidebar";
import SingleItemCard from "@/components/cards/singleItemCard";
import { GetStaticProps } from "next";
import type { FC } from "react";
import { AiFillEnvironment } from "react-icons/ai";
import { api } from "~/utils/api";
import { generateSSGHelper } from "~/utils/helpers/serverSideHelper";

interface singleItemViewProps {
  id: string;
}

const singleItemView: FC<singleItemViewProps> = ({ id }) => {
  const { data, isLoading } = api.storedItem.getById.useQuery(id);
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
          <SingleItemCard itemName={data.name} itemInfo={itemInfo} />
        </div>
      </div>
    </Sidebar>
  );
};

export default singleItemView;

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
