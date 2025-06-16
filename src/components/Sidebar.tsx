import React, { type PropsWithChildren } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useState } from "react";
import { AiFillEnvironment } from "react-icons/ai";
import Link from "next/link";
import { type SidebarOption } from "~/types/typings";
import { Icons } from "./Icons";
import { UserButton } from "@clerk/nextjs";

const sidebarOptions: SidebarOption[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
    Icon: "Home",
  },
  {
    id: 2,
    name: "Locations",
    href: "/managed-locations",
    Icon: "Warehouse",
  },
  {
    id: 3,
    name: "Storage",
    href: "/storages",
    Icon: "Home",
  },
  {
    id: 4,
    name: "Inventory",
    href: "/items",
    Icon: "Boxes",
  },
  {
    id: 5,
    name: "Profile",
    href: "/profile",
    Icon: "User",
  },
];
const Sidebar = (props: PropsWithChildren) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`relative h-screen overflow-hidden border-r border-solid border-sky-900 bg-zinc-100 p-5 pt-8 duration-300 ${
          open ? "w-60" : "w-20"
        }`}
      >
        <BsArrowLeftShort
          className={`bg-text-3xl absolute -right-1 top-9 cursor-pointer rounded-full border border-dark-purple bg-amber-300 text-lg text-dark-purple ${
            open ? "" : "rotate-180"
          } `}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <div className="inline-flex">
          <AiFillEnvironment
            className={`float-left rounded bg-amber-300 text-4xl text-dark-purple duration-500 ${
              open ? "" : "rotate-[360deg]"
            } mr-2 block`}
          />
          <h1
            className={`p-2 ${
              !open ? "scale-0" : ""
            } origin-left text-2xl font-medium duration-500`}
          >
            House Manager
          </h1>
        </div>
        <ul className=" space-y-8 pt-10">
          {sidebarOptions.map((option) => {
            const Icon = Icons[option.Icon];
            return (
              <li key={option.id}>
                <Link
                  href={option.href}
                  className="group  flex items-center justify-center gap-3 rounded-md p-3 text-sm font-semibold leading-6 text-gray-700 hover:border hover:border-black hover:bg-gray-50 hover:text-indigo-600"
                >
                  <div
                    className={`flex items-center ${
                      open ? "justify-start" : "justify-center"
                    } w-full`}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className={`truncate ${open ? "block" : "hidden"} `}>
                      {option.name}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="absolute bottom-5 -mx-4 mt-auto flex items-center">
          <span className="ml-2">
            <UserButton afterSignOutUrl="/" />
          </span>
          <div className="flex flex-col text-sm">
            <span
              className={`truncate px-2.5 font-bold ${
                !open ? "scale-0" : ""
              } duration-500`}
            >
              Sign Out
            </span>
          </div>
        </div>
      </div>

      <aside className=" h-screen w-full overflow-auto bg-slate-50 p-10">
        <div>{props.children}</div>
      </aside>
    </div>
  );
};

export default Sidebar;
