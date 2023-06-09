import { NextPage } from "next";
import Link from "next/link";
import { api } from "~/utils/api";

interface HouseholdProps {}

const managedLocations: NextPage = () => {
  return (
    <div>
      <Link href="/managedlocations/add">add household</Link>
    </div>
  );
};

export default managedLocations;
