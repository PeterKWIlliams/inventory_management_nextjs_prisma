import ItemStorageCard from "components/ItemStorageCard";
import Sidebar from "components/Sidebar";
import { GetStaticProps } from "next";
import { FC } from "react";
import { api } from "~/utils/api";
import { generateSSGHelper } from "~/utils/helpers/serverSideHelper";

interface singleManagedLocationProps {
  id: string;
}

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

const singleManagedLocation: FC<singleManagedLocationProps> = (id) => {
  const { data, isLoading } = api.managedLocation.getById.useQuery(id.id);
  console.log("this is the data", data);

  return <Sidebar></Sidebar>;
};

export default singleManagedLocation;
