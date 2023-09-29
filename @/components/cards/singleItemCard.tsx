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
  Address,
  ItemInfo,
  ItemStorage,
  Location,
  StoredItem,
} from "@prisma/client";
import { ItemInfoSchema } from "prisma/generated/zod";
import { z } from "zod";

interface SingleItemCardProps {
  itemName: string;
  itemInfo: ItemInfo;
}

const SingleItemCard: FC<SingleItemCardProps> = ({ itemInfo, itemName }) => {
  return (
    <>
      <Card className="sm:w-70 br mt-7 w-96 flex-col overflow-hidden rounded-tl-3xl border-2 border-solid border-amber-300  bg-slate-50  shadow-lg  ">
        <CardContent></CardContent>

        <div className="flex flex-col justify-between p-6">
          <div>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-700">
                {itemName}
              </CardTitle>

              <CardDescription className="mt-2 text-gray-500"></CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <p className=" text-gray-700">
                <div className="float-left">purchase date:</div>
                <div className="float-right">
                  {itemInfo.purchaseDate.toString().slice(4, 15)}
                </div>
              </p>
              <p className=" text-gray-700">
                price:{`£${itemInfo.purchasePrice}`}
              </p>
              <p className=" text-gray-700">{}</p>
            </CardContent>
          </div>
          <CardFooter className="mt-4 text-sm text-gray-500">
            <p>Card Footer</p>
          </CardFooter>
        </div>
      </Card>
    </>
  );
};

export default SingleItemCard;
