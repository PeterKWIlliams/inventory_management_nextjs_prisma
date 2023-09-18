import { FC } from "react";
import { Button } from "../ui/Button";
import {
  ManagedLocationFormDataType,
  ManagedLocationFormSchema,
} from "~/utils/validations/add-managedLocation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/Input";

interface ManagedLocationProps {
  onSubmit: (data: ManagedLocationFormDataType) => void;
  buttonAction: string;
}

const ManagedLocationForm: FC<ManagedLocationProps> = ({
  buttonAction,
  onSubmit,
}) => {
  const form = useForm<ManagedLocationFormDataType>({
    resolver: zodResolver(ManagedLocationFormSchema),
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-col ">
        <div className="mt-4 gap-4">
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
        </div>
        <div className="mt-4 gap-4 md:inline-flex">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="eg. Quebec" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postcode</FormLabel>
                <FormControl>
                  <Input placeholder="eg. 10A3BZ" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street Name</FormLabel>
                <FormControl>
                  <Input placeholder="eg. 3 salt lake drive" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-6 flex justify-center">
          <Button type="submit">{buttonAction}</Button>
        </div>
      </form>
    </Form>
  );
};

export default ManagedLocationForm;
