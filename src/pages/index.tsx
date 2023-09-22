import Sidebar from "components/Sidebar";
import { NextPage } from "next";
import { api } from "~/utils/api";

// Define the Home page component

const Home: NextPage = () => {
  const deleteItem = api.storedItem.deleteAll.useMutation();

  return (
    <Sidebar>
      <div className=" flex items-center justify-center">
        <h1>Home</h1>
      </div>
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => {
          deleteItem.mutate();
          console.log("hello");
        }}
      />
      <div className="">second bit</div>
    </Sidebar>
  );
};

// Export the Home page component
export default Home;
