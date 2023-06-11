import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "~/lib/utils";
import { Button } from "./ui/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/Command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/Popover";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/Form";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import { Input } from "./ui/Input";
import { toast } from "react-hot-toast";

const FormSchema = z.object({
  firstName: z.string({
    required_error: "Please enter your first name .",
  }),
  lastName: z.string({
    required_error: "Please enter your last name .",
  }),
  email: z.string({
    required_error: "Please enter your email address .",
  }),
  city: z.string({
    required_error: "Please enter the city of current residence .",
  }),
  postcode: z.string({
    required_error: "Please enter current postcode .",
  }),
  street: z.string({
    required_error: "Please enter current street address .",
  }),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success("Profile updated successfully");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-col ">
        <div className="mt-4 gap-4 md:inline-flex">
          <FormField
            control={form.control}
            name="firstName"
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
        <div className="mt-4">
          <FormField
            control={form.control}
            name="email"
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
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}

// import { FC } from "react";
// import Button from "./ui/Button";

// import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
// import { ProfileFormDataType } from "~/utils/validations/add-profile";

// interface ProfileFormProps {
//   onSubmit: (data: ProfileFormDataType) => void;
//   handleSubmit: UseFormHandleSubmit<ProfileFormDataType, undefined>;
//   register: UseFormRegister<ProfileFormDataType>;
// }

// const ProfileForm: FC<ProfileFormProps> = ({
//   onSubmit,
//   handleSubmit,
//   register,
// }) => {
//   return (
//     <form
//       className="sm:max-w-2xl md:max-w-7xl "
//       onSubmit={handleSubmit(onSubmit)}
//     >
//       <div className="-mx-3 mb-6 mt-6 flex flex-wrap">
//         <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
//           <label
//             className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
//             htmlFor="firstName"
//           >
//             First Name
//           </label>
//           <input
//             {...register("firstName", {
//               required: true,
//             })}
//             className="mb-3 block w-full appearance-none rounded border  bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
//             id="firstName"
//             type="text"
//           />
//         </div>
//         <div className="w-full px-3 md:w-1/2">
//           <label
//             className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
//             htmlFor="lastName"
//           >
//             Last Name
//           </label>
//           <input
//             {...register("lastName", {
//               required: true,
//             })}
//             className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
//             id="lastName"
//             type="text"
//           />
//         </div>
//       </div>
//       <div className="-mx-3 mb-6 flex flex-wrap">
//         <div className="w-full px-3">
//           <label
//             className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
//             htmlFor="email"
//           >
//             Email Address
//           </label>
//           <input
//             {...register("email", {
//               required: "Please enter your email",
//             })}
//             className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
//             id="email"
//             type="email"
//           />
//         </div>
//       </div>
//       <div className="-mx-3 mb-2 flex flex-wrap">
//         <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
//           <label
//             className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
//             htmlFor="city"
//           >
//             City
//           </label>
//           <input
//             {...register("city", {
//               required: "Please enter your city",
//             })}
//             className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
//             id="city"
//             type="text"
//           />
//         </div>
//         <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
//           <label
//             className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
//             htmlFor="street"
//           >
//             Street
//           </label>
//           <div className="relative">
//             <input
//               {...register("street", {
//                 required: "Please enter your street",
//               })}
//               className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
//               id="user_address"
//               type="text"
//             />
//           </div>
//         </div>
//         <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
//           <label
//             className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
//             htmlFor="grid-zip"
//           >
//             Postcode
//           </label>
//           <input
//             {...register("postcode", {
//               required: "Please enter your postcode",
//             })}
//             className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
//             id="grid-zip"
//             type="text"
//           />
//         </div>
//       </div>
//       <div className="mt-6 flex justify-center">
//         <Button size={"lg"}>Submit</Button>
//       </div>
//     </form>
//   );
// };

// export default ProfileForm;
