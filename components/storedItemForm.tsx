import { FC } from "react";
import { Form, useForm } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/Popover";
import { Button } from "./ui/Button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "./ui/Command";
import { ChevronsUpDown, Check } from "lucide-react";
import { cn } from "~/lib/utils";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "./ui/Form";
import { Input } from "./ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";

interface ItemFormProps {}

const ItemForm: FC<ItemFormProps> = ({}) => {
  const form = useForm<>({
    resolver: zodResolver(itemFormSchema),
    defaultValues: defaultValues,
  });
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
  )

export default ItemForm;
