import ManagedLocationCard from "components/ManagedLocationCard";
import Sidebar from "components/Sidebar";
import Link from "next/link";
import { FC } from "react";
import { api } from "~/utils/api";

interface managedLocationsProps {}

const ManagedLocations: FC<managedLocationsProps> = () => {
  const { data, isLoading } = api.managedLocation.getAllForUser.useQuery();
  if (!data) return <div></div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);
  return (
    <Sidebar>
      <div className="ml-10">
        {" "}
        {/* Add margin to the left */}
        <div className=" ">
          <h1>
            {" "}
            <Link href="/managedlocations/add">add household</Link>
          </h1>
        </div>
        <div className="mt-7 grid grid-cols-1 flex-wrap gap-10 md:grid-cols-2">
          {data.map((data, index) => (
            <ManagedLocationCard key={index} data={data} />
          ))}
        </div>
      </div>
    </Sidebar>
  );
};

export default ManagedLocations;
