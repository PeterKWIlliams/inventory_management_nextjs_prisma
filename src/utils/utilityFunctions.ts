import { User } from "@clerk/nextjs/dist/api";
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    first_name: user.firstName,
    last_name: user.lastName,
    email: user.emailAddresses[0],
  };
};
