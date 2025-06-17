import Sidebar from '@/components/Sidebar';
import { AddManagedLocationDataTable } from '@/components/dataTables/addManagedLocationDataTable';
import {
  type AddManagedLocationTableData,
  addManagedLocationsColumns,
} from '@/components/dataTables/addManagedLocationColumns';
import { type FC } from 'react';
import { api } from '~/utils/api';
import Loading from '@/components/loading';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/router';

const SelectLocation: FC = () => {
  const { data, isLoading } = api.managedLocation.getAllForUser.useQuery();
  const router = useRouter();
  if (isLoading) return <Loading />;
  if (!data) return <div>no data</div>;

  const transformedData: AddManagedLocationTableData[] = data.map(
    (managedLocation) => {
      return {
        locationName: managedLocation.location.name,
        postcode: managedLocation.location.address.postcode,
        locationId: managedLocation.location.id,
        address: managedLocation.location.address.street,
        city: managedLocation.location.address.city,
        managedLocationId: managedLocation.id,
      };
    },
  );
  if (data.length < 1) {
    return (
      <Sidebar>
        <div className="ml-10 mr-10">
          <h1 className="flex justify-center border-b-4 text-4xl">
            YOU HAVE NO LOCATIONS
          </h1>
          <h2>
            <div className="mt-5 flex flex-shrink-0 text-lg"></div>
          </h2>
        </div>

        <div className="flex h-48 items-center justify-center">
          <Button
            onClick={() => {
              void router.push('/managed-locations/add');
            }}
          >
            Click to add a new location
          </Button>
        </div>
      </Sidebar>
    );
  }
  return (
    <Sidebar>
      <div className="ml-10 mr-10">
        <h1 className="flex justify-center border-b-4 text-4xl">
          {' '}
          Select Location To add Storage
        </h1>
        <h2>
          {' '}
          <div className="mt-5 flex flex-shrink-0 text-lg"></div>
        </h2>
      </div>

      <div className="container mx-auto max-w-4xl py-10">
        <AddManagedLocationDataTable
          columns={addManagedLocationsColumns}
          data={transformedData}
        />
      </div>
    </Sidebar>
  );
};

export default SelectLocation;
