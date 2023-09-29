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
import warehouse_pic_1 from "/public/images/warehouse_pic_1.jpeg";
import {
  ItemStorage,
  Location,
  ManagedLocation,
  StoredItem,
} from "@prisma/client";

interface ItemStorageCardProps {
  realData: ManagedLocation;
}

const ItemStorageCard: FC<ItemStorageCardProps> = ({ realData }) => {
  return (
    <Card className="mt-7 flex overflow-hidden rounded-tl-3xl bg-white shadow-lg hover:cursor-pointer hover:bg-purple-100 hover:font-extrabold">
      <Image
        alt="Location"
        src={warehouse_pic_1}
        width={148}
        height={100}
        className="rounded-tl-2xl object-cover"
        key={realData.id}
      />
      <div className="flex flex-col justify-between p-6">
        <div>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-700">
              {}
            </CardTitle>

            <CardDescription className="mt-2 text-gray-500">
              Card Description
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mt-4 text-gray-700">Card Content</p>
          </CardContent>
        </div>
        <CardFooter className="mt-4 text-sm text-gray-500">
          <p>Card Footer</p>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ItemStorageCard;
