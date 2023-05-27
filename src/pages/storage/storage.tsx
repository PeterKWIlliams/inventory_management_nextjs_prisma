import Sidebar from "components/sidebar";
import { NextPage } from "next";
import { FC } from "react";

interface storageProps {}

const storage: NextPage = ({}) => {
  return (
    <Sidebar>
      <h1>this is the storage</h1>;
    </Sidebar>
  );
};

export default storage;
