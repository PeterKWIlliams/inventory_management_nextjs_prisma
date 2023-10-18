import { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/Card";

import type { ItemInfo } from "@prisma/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";
import { Button } from "../ui/Button";
import { Icons } from "../Icons";

interface SingleItemCardProps {
  itemName: string;
  itemInfo: ItemInfo;
  onClickDelete: () => void;
}

const SingleItemCard: FC<SingleItemCardProps> = ({
  itemInfo,
  itemName,
  onClickDelete,
}) => {
  return (
    <>
      <Card className="sm:w-70 br relative mt-7 w-96 flex-col overflow-hidden rounded-tl-3xl border-2 border-solid border-amber-300  bg-slate-50  shadow-lg  ">
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
          <div className="absolute bottom-2 right-2" style={{ color: "red" }}>
            <Dialog>
              <DialogTrigger>
                <Icons.BadgeX className="hover:text-purple-600" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    this location and all of its contents.
                  </DialogDescription>
                </DialogHeader>
                <DialogTrigger>
                  <Button
                    className="bg-red-500 font-extrabold hover:bg-purple-600"
                    onClick={onClickDelete}
                  >
                    OK
                  </Button>
                </DialogTrigger>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </Card>
    </>
  );
};

export default SingleItemCard;
