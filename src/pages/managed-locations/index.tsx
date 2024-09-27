import { Icons } from "@/components/Icons";
import ManagedLocationCard from "@/components/cards/ManagedLocationCard";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import React from "react";
import { type FC } from "react";
import { api } from "~/utils/api";
import Loading from "@/components/loading";

const ManagedLocations: FC = () => {
  const { data, isLoading } = api.managedLocation.getAllForUser.useQuery();

  if (isLoading) return <Loading />;
  if (!data) return <div>No locations </div>;

  // if (!currentData) return <div>no current data </div>;

  return (
    <Sidebar>
      <div className="flex flex-col">
        <h1 className="mb-20 flex justify-center text-2xl md:text-5xl">
          <span className="border-b border-t border-black">LOCATIONS</span>
        </h1>
        <h2>
          <div className="mt-8 flex flex-shrink-0 text-lg">
            <Link
              href="/managed-locations/add "
              className="flex space-x-3 hover:text-purple-500"
            >
              <Icons.PlusCircle className="opacity-50" />
              <p className="">ADD NEW LOCATION</p>
            </Link>
          </div>
        </h2>
        <div className="flex items-center justify-center justify-items-center">
          <div className="mt-20 grid w-4/5 grid-cols-1 gap-10 lg:grid-cols-2 2xl:grid-cols-3">
            {data.map((data, index) => (
              <ManagedLocationCard
                key={index}
                data={{
                  imgUrl: data.image_url,
                  id: data.id,
                  location: data.location,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default ManagedLocations;

{
  /* Come Back to this when you want to implement a search functionality */
}
{
  /* <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? managedLocations.find(
                    (managedLocation) => managedLocation.value === value
                  )?.label
                : "Select framework..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {managedLocations.map((managedLocation) => (
                  <CommandItem
                    key={managedLocation.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === managedLocation.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {managedLocation.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover> */
}
