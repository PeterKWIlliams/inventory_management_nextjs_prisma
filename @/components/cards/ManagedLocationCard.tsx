import { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/Card";
import Image from "next/image";
import warehouse_pic_1 from "public/images/warehouse_pic_1.jpeg";
import { Location } from "@prisma/client";
import { useRouter } from "next/router";
import Link from "next/link";
import { Icons } from "../Icons";

interface ManagedLocationCardProps {
  data: {
    location: Location;
    id: string;
  };
}

const ManagedLocationCard: FC<ManagedLocationCardProps> = ({ data }) => {
  const router = useRouter();

  return (
    <Link href={`/managed-locations/${data.id}`}>
      <Card className=" w-90 mt-7 flex h-60 overflow-hidden rounded-tl-3xl  bg-blue-200 shadow-lg hover:cursor-pointer hover:bg-purple-200 hover:font-extrabold">
        <Image
          alt="Location"
          src={warehouse_pic_1}
          width={148}
          height={100}
          className="rounded-tl-2xl object-cover"
          key={data.id}
        />
        <div className="flex  flex-col justify-between p-6">
          <div>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-700">
                {data.location.name}
              </CardTitle>

              <CardDescription className="mt-2 text-gray-500">
                Card Description
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mt-4 text-gray-700">Card Content</p>
            </CardContent>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ManagedLocationCard;
