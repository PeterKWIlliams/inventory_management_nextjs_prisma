import Sidebar from "@/components/Sidebar";
import DashboardPage from "@/components/dashboard/dashboard";

import type { NextPage } from "next";
import { api } from "~/utils/api";
import Loading from "@/components/loading";

const Home: NextPage = () => {
  const { data, isLoading } = api.user.getAllData.useQuery();

  if (isLoading) return <Loading />;
  if (!data) return <div>no data</div>;

  // console.log(data);

  return (
    <>
      <Sidebar>
        <DashboardPage data={data} />
      </Sidebar>
    </>
  );
};

export default Home;
// const clearDatabase = api.itemStorage.deleteAll.useMutation();
/* 
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => {
          clearDatabase.mutate();
          console.log("hello");
        }}
      /> */
