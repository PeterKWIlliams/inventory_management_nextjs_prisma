import React, { PropsWithChildren } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useState } from "react";
import { AiFillEnvironment } from "react-icons/ai";
import Link from "next/link";

const menuItems = ["Home", "About", "Contact", "Login"];

const Sidebar = (props: PropsWithChildren) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`relative h-screen  bg-dark-purple p-5 pt-8 duration-300 ${
          open ? "w-72" : "w-20"
        }`}
      >
        <BsArrowLeftShort
          className={`absolute -right-3 top-9 cursor-pointer rounded-full border border-dark-purple bg-white text-3xl text-dark-purple ${
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
        <ul className="pt-2">
          {menuItems.map((item, index) => (
            <div
              className={`${
                !open && "pointer-events-none scale-50"
              } duration-300`}
            >
              <li
                key={index}
                className="flex cursor-pointer items-center gap-x-4 p-3 text-sm text-gray-400"
              >
                <Link href={`/${item}`} className="">
                  {item}
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div className="p-7">
        <h1 className="text-2xl font-semibold">HomePage</h1>
      </div>
    </div>
  );
};

export default Sidebar;
