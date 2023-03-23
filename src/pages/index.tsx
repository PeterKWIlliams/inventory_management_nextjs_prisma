import Hello from "components/hello";
import Layout from "components/layout";
import { NextPage } from "next";

// Define the Home page component
const Home: NextPage = () => {
  return (
    <>
      <Layout children={<Hello />} />
    </>
  );
};

// Export the Home page component
export default Home;
