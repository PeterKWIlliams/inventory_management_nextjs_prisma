import { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/Card";
import Image from "next/image";
import warehouse_pic_1 from "../public/images/warehouse_pic_1.jpeg";
import {
  Address,
  ItemInfo,
  ItemStorage,
  Location,
  StoredItem,
} from "@prisma/client";

interface SingleManagedLocationCardProps {
  data: {
    location: Location & {
      address: Address;
    };
    itemStorage: (ItemStorage & {
      storedItem: (StoredItem & {
        ItemInfo: ItemInfo[];
      })[];
      _count: {
        storedItem: number;
      };
    })[];
  };
}

const SingleManagedLocationCard: FC<SingleManagedLocationCardProps> = ({
  data,
}) => {
  return (
    <Card className="sm:w-70 br mt-7 flex w-96 overflow-hidden rounded-tl-3xl border-2 border-solid border-amber-300  bg-slate-50  shadow-lg  ">
      <Image
        alt="Location"
        src={warehouse_pic_1}
        width={148}
        height={100}
        className="rounded-tl-2xl object-cover"
      />
      <div className="flex flex-col justify-between p-6">
        <div>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-700">
              {data.location.name}
            </CardTitle>

            <CardDescription className="mt-2 text-gray-500"></CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col">
            <p className=" text-gray-700">{data.location.address.street}</p>
            <p className=" text-gray-700">{data.location.address.city}</p>
            <p className=" text-gray-700">{data.location.address.postcode}</p>
          </CardContent>
        </div>
        <CardFooter className="mt-4 text-sm text-gray-500">
          <p>Card Footer</p>
        </CardFooter>
      </div>
    </Card>
  );
};

export default SingleManagedLocationCard;
