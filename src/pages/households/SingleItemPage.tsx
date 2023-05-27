import Sidebar from "components/sidebar";
import { NextPage } from "next";
import { FC } from "react";

interface SingleItemPageProps {}

const SingleItemPage: NextPage = ({}) => {
  return (
    <Sidebar>
      <h1>this is the single item page</h1>;
    </Sidebar>
  );
};

export default SingleItemPage;
