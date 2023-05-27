import Sidebar from "components/sidebar";
import { NextPage } from "next";

// Define the Home page component

const Home: NextPage = () => {
  return (
    <div>
      <Sidebar></Sidebar>
    </div>
  );
};

// Export the Home page component
export default Home;
