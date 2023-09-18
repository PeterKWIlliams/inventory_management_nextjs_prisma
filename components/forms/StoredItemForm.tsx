import { FC } from "react";
import { Button } from "../ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover";

import { cn } from "~/lib/utils";
import { Input } from "../ui/Input";
import {
  StoredItemFormDataType,
  StoredItemFormSchema,
} from "~/utils/validations/item-form";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";

interface StoredItemFormProps {
  onSubmit: (data: StoredItemFormDataType) => void;
}

const StoredItemForm: FC<StoredItemFormProps> = ({ onSubmit }) => {
  const form = useForm<StoredItemFormDataType>({
    resolver: zodResolver(StoredItemFormSchema),
    defaultValues: {
      purchaseDate: new Date(),
      expiryDate: new Date(),
      purchasePrice: 0,
      desiredQuantity: 0,
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item Name</FormLabel>
              <FormControl>
                <Input placeholder="eg. Golden delicious apple" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-6 flex flex-row justify-between">
          <FormField
            control={form.control}
            name="purchaseDate"
            render={({ field }) => (
              <FormItem>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Date of you acquired the item</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="expiryDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Expiry Date of the item if applicable
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-6 flex flex-row justify-around">
          <FormField
            control={form.control}
            name="purchasePrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>purchase price</FormLabel>
                <FormControl>
                  <Input placeholder="eg. 7.99" {...field} />
                </FormControl>
                <FormDescription>0 if N/A</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="desiredQuantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>desired quantity</FormLabel>
                <FormControl>
                  <Input placeholder="eg. 4" {...field} />
                </FormControl>
                <FormDescription>0 if N/A</FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-6 justify-around">
          <FormField
            control={form.control}
            name="supplierName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>supplier</FormLabel>
                <FormControl>
                  <Input placeholder="eg. lidl" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-6 flex flex-row justify-around">
          <FormField
            control={form.control}
            name="baseItemName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Base item name</FormLabel>
                <FormControl>
                  <Input placeholder="eg. apple" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="baseType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Item type</FormLabel>
                <FormControl>
                  <Input placeholder="eg. food" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-5 flex justify-center">
          <Button type="submit">submit</Button>
        </div>
      </form>
    </Form>
  );
};
export default StoredItemForm;

// <FormField
// control={form.control}
// name="baseItemId"
// render={({ field }) => (
//   <FormItem className="flex flex-col">
//     <FormLabel>Language</FormLabel>
//     <Popover>
//       <PopoverTrigger asChild>
//         <FormControl>
//           <Button
//             variant="outline"
//             role="combobox"
//             className={cn(
//               "w-[200px] justify-between",
//               !field.value && "text-muted-foreground"
//             )}
//           >
//             {field.value
//               ? managedLocations.find(
//                   (managedLocation) =>
//                     managedLocation.value === field.value
//                 )?.label
//               : "select base item"}
//             <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//           </Button>
//         </FormControl>
//       </PopoverTrigger>
//       <PopoverContent className="w-[200px] p-0">
//         <Command>
//           <CommandInput placeholder="Search framework..." />
//           <CommandEmpty>No framework found.</CommandEmpty>
//           <CommandGroup>
//             {managedLocations.map((managedLocation) => (
//               <CommandItem
//                 value={managedLocation.label}
//                 key={managedLocation.value}
//                 onSelect={(value) => {
//                   form.setValue(
//                     "managedLocationId",
//                     managedLocation.value
//                   );
//                 }}
//               >
//                 <Check
//                   className={cn(
//                     "mr-2 h-4 w-4",
//                     managedLocation.value === field.value
//                       ? "opacity-100"
//                       : "opacity-0"
//                   )}
//                 />
//                 {managedLocation.label}
//               </CommandItem>
//             ))}
//           </CommandGroup>
//         </Command>
//       </PopoverContent>
//     </Popover>
//     <FormDescription>Select Location To add storage</FormDescription>
//     <FormMessage />
//   </FormItem>
// )}
// />
