import { NextPage } from "next";
import * as React from "react";
import Card from "components/ui/Card";
import { AiFillEnvironment } from "react-icons/ai";

interface profilesetupProps {}

const profilesetup: NextPage = ({}) => {
  return (
    <div className=" flex flex-col items-center">
      <h1 className="mb-7 text-5xl font-bold">Profile Setup</h1>
      <AiFillEnvironment className="mb-20 rounded bg-amber-300 text-8xl text-dark-purple" />

      <Card />
    </div>
  );
};

export default profilesetup;
