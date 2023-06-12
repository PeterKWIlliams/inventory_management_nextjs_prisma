import { FC } from "react";
import { Button } from "./ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/Form";
import {
  ItemStorageFormDataType,
  ItemStorageFormSchema,
} from "~/utils/validations/add-itemStorage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Check, ChevronsUpDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/Popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/Command";

import { cn } from "~/lib/utils";
import { Input } from "./ui/Input";
import { api } from "~/utils/api";

interface ItemStorageFormProps {
  buttonAction: string;
  onSubmit: (data: ItemStorageFormDataType) => void;
}

const ItemStorageForm: FC<ItemStorageFormProps> = ({
  onSubmit,
  buttonAction,
}) => {
  const form = useForm<ItemStorageFormDataType>({
    resolver: zodResolver(ItemStorageFormSchema),
  });
  const managedLocations = api.managedLocation.getAllForUser
    .useQuery()
    .data?.map((location) => {
      return { label: location.location.name, value: location.id };
    });
  if (!managedLocations) return <div>no managedlocations</div>;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-col">
        <div className="inline-flex justify-between">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="eg. Family home" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="eg. Quebec" {...field} />
                </FormControl>
                <FormDescription>
                  The location of the itemStorage
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="managedLocationId"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Language</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? managedLocations.find(
                            (managedLocation) =>
                              managedLocation.value === field.value
                          )?.label
                        : "Select managedLocationId"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {managedLocations.map((managedLocation) => (
                        <CommandItem
                          value={managedLocation.label}
                          key={managedLocation.value}
                          onSelect={(value) => {
                            form.setValue(
                              "managedLocationId",
                              managedLocation.value
                            );
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              managedLocation.value === field.value
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
              </Popover>
              <FormDescription>Select Location To add storage</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-5 flex justify-center">
          <Button type="submit">{buttonAction}</Button>
        </div>
      </form>
    </Form>
  );
};

export default ItemStorageForm;
