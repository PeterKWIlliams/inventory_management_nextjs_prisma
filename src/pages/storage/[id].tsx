import { Icons } from "components/Icons";

import Sidebar from "components/Sidebar";
import { ItemsColumns } from "components/dataTables/ItemsColumns";
import { ItemsDataTable } from "components/dataTables/ItemsDataTable";
import Link from "next/link";

import { GetStaticProps } from "next/types";
import { FC } from "react";
import { api } from "~/utils/api";
import { generateSSGHelper } from "~/utils/helpers/serverSideHelper";

interface SingleStorageProps {
  id: string;
}

const singleStorage: FC<SingleStorageProps> = ({ id }) => {
  const { data, isLoading } = api.itemStorage.getById.useQuery(id);
  if (!data) return <div>no data</div>;
  if (isLoading) return <div>loading</div>;
  console.log(data);
  return (
    <Sidebar>
      <div className="flex justify-center text-lg">
        <h1>{}</h1>
      </div>

      <div className=" flex h-full w-full items-center justify-center ">
        {/* <ItemStorageCard data={data} /> */}
      </div>

      <div className="container mx-auto max-w-4xl py-10">
        <Link
          href={`/storage/${id}/addItem`}
          className="flex flex-shrink-0 flex-row  hover:text-purple-500"
        >
          add Item
          <Icons.PlusCircle className="ml-2 mt-1 opacity-50" />
        </Link>
        <ItemsDataTable
          columns={ItemsColumns}
          data={[
            {
              Item: "test",
              price: 20,
              storageLocation: "test",
              storageName: "test",
            },
            {
              Item: "test",
              price: 10,
              storageLocation: "test",
              storageName: "test",
            },
            {
              Item: "test",
              price: 15,
              storageLocation: "test",
              storageName: "test",
            },
          ]}
        />
      </div>
    </Sidebar>
  );
};

export default singleStorage;

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

[
  {
    id: "cljg6jnns000zq5mquezlyl47",
    name: "TestStorage",
    location: "TestStorage",
    managedLocationId: "cljfv831a0007q5mqt1eexiy5",
    managedLocation: {
      id: "cljfv831a0007q5mqt1eexiy5",
      userId: "user_2Rq72ayndoAt4Icf9DzQXdbFvtC",
      locationId: "cljfv82vd0005q5mqwgjqzmte",
    },
    storedItem: [
      {
        id: "TestItem1 ",
        name: "TestItem1",
        itemStorageId: "cljg6jnns000zq5mquezlyl47",
        ItemInfo: [],
      },
    ],
  },
];
