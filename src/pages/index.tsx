import Sidebar from "@/components/Sidebar";
import DashboardPage from "@/components/dashboard/dashboard";
import { ItemStorage } from "@prisma/client";
import type { NextPage } from "next";

import { RouterOutputs, api } from "~/utils/api";

const Home: NextPage = () => {
  const { data, isLoading, error } = api.user.getAllData.useQuery();

  if (isLoading) return <div>loading</div>;
  if (!data) return <div>no data</div>;
  console.log(data);

  return (
    <Sidebar>
      <DashboardPage data={data} />
    </Sidebar>
  );
};

export default Home;

{
  /* reset button for the database<button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => {
          deleteItem.mutate();
          console.log("hello");
        }}
      /> */
}


