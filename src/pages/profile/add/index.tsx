import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileForm } from "components/ProfileForm";

import Sidebar from "components/Sidebar";
import { NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEnvironment } from "react-icons/ai";

import { api } from "~/utils/api";
import {
  ProfileFormDataType,
  addUserFormValidator,
} from "~/utils/validations/add-profile";

interface profileSetupProps {}

const profilesetup: NextPage = ({}) => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const user = useUser();
  const userId = user.user?.id;

  if (!userId) {
    return <div>you are not signed in</div>;
  }

  return (
    <Sidebar>
      <div className="mt-9 flex flex-col items-center">
        <h1 className="mb-7 text-5xl font-bold">Profile Setup</h1>
        <AiFillEnvironment className="text-dark-purple mb-20 rounded bg-amber-300 text-8xl" />
        <ProfileForm />
      </div>
    </Sidebar>
  );
};

export default profilesetup;

// import { useUser } from "@clerk/nextjs";
// import { zodResolver } from "@hookform/resolvers/zod";
// import ProfileForm from "components/ProfileForm";
// import Sidebar from "components/Sidebar";
// import { NextPage } from "next";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { AiFillEnvironment } from "react-icons/ai";

// import { api } from "~/utils/api";
// import {
//   ProfileFormDataType,
//   addUserFormValidator,
// } from "~/utils/validations/add-profile";

// interface profileSetupProps {}

// const profilesetup: NextPage = ({}) => {
//   const [errorMessage, setErrorMessage] = useState<string>("");

//   const user = useUser();
//   const userId = user.user?.id;

//   if (!userId) {
//     return <div>you are not signed in</div>;
//   }

//   const [success, setSuccess] = useState<boolean>(false);
//   const {
//     register,
//     setError,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<ProfileFormDataType>({
//     resolver: zodResolver(addUserFormValidator),
//   });
//   const addUser = api.user.add.useMutation({
//     onError: (error: any) => {
//       console.log(error.message);
//       setError("email", { message: error.message });
//     },
//   });
//   const onSubmit = async (data: ProfileFormDataType) => {
//     try {
//       addUser.mutate({
//         userId: userId,
//         email: data.email,
//         firstName: data.firstName,
//         lastName: data.lastName,
//         city: data.city,
//         postcode: data.postcode,
//         street: data.street,
//       });
//     } catch (error) {}
//   };

//   return (
//     <Sidebar>
//       <div className=" flex flex-col items-center">
//         <h1 className="mb-7 text-5xl font-bold">Profile Setup</h1>
//         <AiFillEnvironment className="text-dark-purple mb-20 rounded bg-amber-300 text-8xl" />
//         <ProfileForm
//           onSubmit={onSubmit}
//           handleSubmit={handleSubmit}
//           register={register}
//         />
//         <div className="t mt-1 text-sm text-red-600">
//           {errors.email?.message}
//         </div>
//       </div>
//     </Sidebar>
//   );
// };

// export default profilesetup;
