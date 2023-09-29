import Sidebar from "@/components/Sidebar";
import { NextPage } from "next";

const MyProfile: NextPage = ({}) => {
  return (
    <Sidebar>
      <h1 className="flex justify-center text-6xl">Profile</h1>
    </Sidebar>
  );
};

export default MyProfile;
