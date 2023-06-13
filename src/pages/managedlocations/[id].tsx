import { GetStaticProps } from "next";
import { FC } from "react";
import { api } from "~/utils/api";
import { generateSSGHelper } from "~/utils/helpers/serverSideHelper";

interface singleManagedLocationProps {}

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHelper();
  console.log(context);
  await ssg.post.getById.prefetch({ id });

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

const singleManagedLocation: FC<singleManagedLocationProps> = ({ id }) => {
  return <div>singleHousehold</div>;
};

export default singleManagedLocation;
