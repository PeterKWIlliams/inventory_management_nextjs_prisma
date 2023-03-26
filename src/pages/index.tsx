import Hello from "components/hello";
import Layout from "components/layout";
import { NextPage } from "next";
import ItemSubmit from "./formSubmission/itemSubmit";

// Define the Home page component
const Home: NextPage = () => {
  return (
    <>
      <Layout children={<ItemSubmit />} />
    </>
  );
};

// Export the Home page component
export default Home;
