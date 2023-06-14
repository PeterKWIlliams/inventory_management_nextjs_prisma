import ManagedLocationCard from "components/ManagedLocationCard";
import Sidebar from "components/Sidebar";
import Link from "next/link";
import { FC } from "react";
import { api } from "~/utils/api";

interface managedLocationsProps {}

const ManagedLocations: FC<managedLocationsProps> = () => {
  const { data, isLoading } = api.managedLocation.getAllForUser.useQuery();

  if (isLoading) return <div>loading...</div>;
  if (!data) return <div>No locations </div>;
  console.log(data);
  return (
    <Sidebar>
      <div className="ml-10 mr-10">
        <h1>
          {" "}
          <Link href="/managedlocations/add">add new location </Link>
        </h1>

        <div className="mt-7 grid grid-cols-1 flex-wrap gap-10 lg:grid-cols-2">
          {data.map((data, index) => (
            <ManagedLocationCard key={index} data={data} />
          ))}
        </div>
      </div>
    </Sidebar>
  );
};

export default ManagedLocations;
