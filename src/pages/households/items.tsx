import Sidebar from "components/sidebar";
import { NextPage } from "next";
import { FC } from "react";

interface itemsProps {}

const items: NextPage = ({}) => {
  return (
    <Sidebar>
      <h1>this the all items view</h1>;
    </Sidebar>
  );
};

export default items;
