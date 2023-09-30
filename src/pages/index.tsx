import { Icons } from "@/components/Icons";
import Sidebar from "@/components/Sidebar";
import DashboardPage from "@/components/dashboard/dashboard";
import type { NextPage } from "next";
import { api } from "~/utils/api";

// Define the Home page component

const Home: NextPage = () => {
  const Icon = Icons["Logo"];

  return (
    <Sidebar>
      <DashboardPage />
    </Sidebar>
  );
};

// Export the Home page component
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
