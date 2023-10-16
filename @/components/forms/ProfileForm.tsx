import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import { Input } from "../ui/Input";
import {
  ProfileFormDataType,
  ProfileFormSchema,
} from "~/utils/validations/profile-form";
import { Dispatch, FC, SetStateAction, useEffect } from "react";

interface ProfileFormProps {
  buttonAction: string;
  onSubmit: (data: ProfileFormDataType) => void;
  defaultValues?: ProfileFormDataType;
  disabled: boolean;
  isUpdating: boolean;
  onPress: () => void;
}

const ProfileForm: FC<ProfileFormProps> = ({
  onPress,
  buttonAction,
  onSubmit,
  defaultValues,
  disabled,
  isUpdating,
}) => {
  const form = useForm<ProfileFormDataType>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: defaultValues,
  });

  useEffect(() => {
    if (defaultValues) {
      form.reset(defaultValues);
    }
  }, [defaultValues]);

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex-col">
          <div className="mt-4 gap-4 md:inline-flex">
            <FormField
              control={form.control}
              name="firstName"
              disabled={disabled}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="first name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              disabled={disabled}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="last name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-4 ">
            <FormField
              control={form.control}
              name="email"
              disabled={disabled}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="myemail@email.com" {...field} />
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
              disabled={disabled}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="city" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postcode"
              disabled={disabled}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postcode</FormLabel>
                  <FormControl>
                    <Input placeholder="postcode" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="street"
              disabled={disabled}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Name</FormLabel>
                  <FormControl>
                    <Input placeholder="3 salt lake drive" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-6 flex justify-center">
            {buttonAction === "UPDATE" || (
              <Button disabled={isUpdating}>{buttonAction}</Button>
            )}
          </div>
        </form>
      </Form>
      {buttonAction === "SUBMIT" || (
        <Button
          disabled={isUpdating}
          onClick={() => {
            onPress();
          }}
        >
          CLICK TO UPDATE
        </Button>
      )}
    </>
  );
};

export default ProfileForm;
