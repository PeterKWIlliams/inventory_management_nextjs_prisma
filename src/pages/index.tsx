import Sidebar from "components/Sidebar";
import { NextPage } from "next";

// Define the Home page component

const Home: NextPage = () => {
  return (
    <Sidebar>
      <div className=" flex items-center justify-center">
        <h1>Home</h1>
      </div>
      <div className="">second bit</div>
    </Sidebar>
  );
};

// Export the Home page component
export default Home;
