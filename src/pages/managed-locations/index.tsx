import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Icons } from "@/components/Icons";
import ManagedLocationCard from "@/components/cards/ManagedLocationCard";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/Command";
import { ChevronsUpDown, Check } from "lucide-react";
import Link from "next/link";
import React, { use, useEffect } from "react";
import { FC } from "react";
import { cn } from "~/lib/utils";
import { api } from "~/utils/api";

interface managedLocationsProps {}

const ManagedLocations: FC<managedLocationsProps> = () => {
  const { data, isLoading } = api.managedLocation.getAllForUser.useQuery();
  // const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState("");
  // const [currentData, setCurrentData] = React.useState(data);
  // useEffect(() => {
  //   setCurrentData(data);
  // }, [data]);

  if (isLoading) return <div>loading...</div>;
  if (!data) return <div>No locations </div>;
  // if (!currentData) return <div>no current data </div>;

  const managedLocations = data.map((location) => {
    return { label: location.location.name, value: location.id };
  });

  return (
    <Sidebar>
      <div className="ml-10 mr-10">
        <h1 className="flex justify-center border-b-4 text-6xl">Locations </h1>
        <h2>
          {" "}
          <div
            className="mt-5 flex flex-shrink-0 
            text-lg"
          >
            <Link
              href="/managed-locations/add "
              className="flex flex-shrink-0 flex-row  hover:text-purple-500"
            >
              add new location
              <Icons.PlusCircle className="ml-2 mt-1 opacity-50" />
            </Link>
          </div>
        </h2>
        {/* Come Back to this when you want to implement a search functionality */}
        {/* <Popover open={open} onOpenChange={setOpen}>
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
        </Popover> */}

        <div className="mt-2  grid grid-cols-1 gap-10 lg:grid-cols-3">
          {data.map((data, index) => (
            <ManagedLocationCard key={index} data={data} />
          ))}
        </div>
      </div>
    </Sidebar>
  );
};

export default ManagedLocations;
