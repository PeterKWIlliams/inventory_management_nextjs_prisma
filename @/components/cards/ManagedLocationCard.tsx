import { type FC } from "react";
import Image from "next/image";
import { type Location } from "@prisma/client";

import Link from "next/link";

import {} from "~/types/routerOutputTypes";
import { useRouter } from "next/router";

interface ManagedLocationCardProps {
  data: {
    location: Location;
    id: string;
    imgUrl: string;
  };
}

const ManagedLocationCard: FC<ManagedLocationCardProps> = ({ data }) => {
  const router = useRouter();
  return (
    <Link href={`/managed-locations/${data.id}`} className="flex-col">
      <div className="">
        <div className=" flex w-auto rounded-md border border-black bg-zinc-100 shadow-md hover:cursor-pointer hover:bg-purple-200 hover:shadow-xl">
          <div className=" h-40 w-40 ">
            <Image
              className="h-full w-full rounded-bl-md rounded-tl-md"
              alt="Location"
              src={data.imgUrl}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="flex w-60 items-center justify-center ">
            <div>
              <span className="border-2 border-black bg-zinc-200 p-4 shadow-md">
                {data.location.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ManagedLocationCard;
