import { type FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/Card";
import Image from "next/image";
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
      <Card className="relative grid grid-cols-1 rounded-md border border-black bg-zinc-50 shadow-md">
        <div className="h-56 w-80 ">
          <Image
            className="h-full w-full rounded-tl-md rounded-tr-md"
            alt="Location"
            src={
              "https://utfs.io/f/1064e2c0-2731-4949-97bf-2f358e2ff6af-dtspzk.webp"
            }
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="flex flex-col items-center  justify-center ">
          <div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-700">
                {itemName}
              </CardTitle>

              <CardDescription className="text-gray-500"></CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <p className="text-gray-700">{itemInfo.image_url}</p>
              <p className="text-gray-700">{itemInfo.purchasePrice}</p>
              <p className="text-gray-700">{itemInfo.desiredQuantity}</p>
            </CardContent>
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
                      this item from your inventory.
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
        </div>
      </Card>
    </>
  );
};

export default SingleItemCard;
