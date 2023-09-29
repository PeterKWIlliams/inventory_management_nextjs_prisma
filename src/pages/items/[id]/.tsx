import { GetStaticProps } from "next";
import { FC } from "react";
import { api } from "~/utils/api";
import { generateSSGHelper } from "~/utils/helpers/serverSideHelper";

interface singleItemViewProps {
  id: string;
}

const singleItemView: FC<singleItemViewProps> = ({ id }) => {
  const { data, isLoading } = api.storedItem.getById.useQuery(id);

  console.log("this is the data", id, data);

  return <div>index</div>;
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
