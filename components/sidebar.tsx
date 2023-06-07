import React, { PropsWithChildren, ReactComponentElement } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useState } from "react";
import { AiFillEnvironment } from "react-icons/ai";
import Link from "next/link";
import { SidebarOption } from "~/types/typings";
import { Icons } from "./Icons";
import { UserButton, useUser } from "@clerk/nextjs";

const test = process.env.DATABSE_URL;
console.log("this is the teat variable", test);

const sidebarOptions: SidebarOption[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
    Icon: "Home",
  },
  {
    id: 2,
    name: "Households",
    href: "/households",
    Icon: "Warehouse",
  },
  {
    id: 3,
    name: "Storage",
    href: "/storage/storage",
    Icon: "Home",
  },
  {
    id: 4,
    name: "Inventory",
    href: "/dashboard/items",
    Icon: "Boxes",
  },
  {
    id: 5,
    name: "Profile",
    href: "/profile/profilesetup",
    Icon: "User",
  },
];

const Sidebar = (props: PropsWithChildren) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`relative h-screen border-solid border-sky-900 bg-white p-5 pt-8 duration-300 ${
          open ? "w-72" : "w-20"
        }`}
      >
        <BsArrowLeftShort
          className={`bg-text-3xl absolute -right-3 top-9 cursor-pointer rounded-full border border-dark-purple text-dark-purple ${
            open ? null : "rotate-180"
          } `}
          onClick={() => {
            console.log(open);
            setOpen(!open);
          }}
        />
        <div className="inline-flex">
          <AiFillEnvironment
            className={`float-left rounded bg-amber-300 text-4xl text-dark-purple duration-500 ${
              open && "rotate-[360deg]"
            } mr-2 block`}
          />
          <h1
            className={`p-2 ${
              !open && "scale-0"
            } origin-left text-2xl font-medium duration-500`}
          >
            House Manager
          </h1>
        </div>
        <ul className="pt-10">
          {sidebarOptions.map((option) => {
            const Icon = Icons[option.Icon];
            return (
              <li key={option.id}>
                <Link
                  href={option.href}
                  className="group flex gap-3 rounded-md p-7 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600">
                    <Icon className="h-4 w-4" />
                  </span>

                  <span className="truncate">{option.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className=" absolute bottom-5 -mx-4 mt-auto flex items-center">
          <span>
            <UserButton />
          </span>
          <div className="flex flex-col text-xs">
            <span className="truncate px-2.5">
              {user?.firstName} {user?.lastName}
            </span>
            <span className="truncate px-2.5"></span>
          </div>
        </div>
      </div>

      <aside className="max-h-scren container w-full py-16 md:py-12">
        <div>{props.children}</div>
      </aside>
    </div>
  );
};

export default Sidebar;
