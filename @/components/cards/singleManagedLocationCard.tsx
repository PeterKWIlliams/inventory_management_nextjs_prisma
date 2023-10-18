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
import { Icons } from "../Icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";
import { Button } from "../ui/Button";
import { record } from "zod";

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
  onClickDelete: () => void;
}

const SingleManagedLocationCard: FC<SingleManagedLocationCardProps> = ({
  data,
  onClickDelete,
}) => {
  return (
    <Card className="br h-65 w-50 relative mt-7 flex-col items-center justify-center overflow-hidden rounded-3xl border-2  border-solid  border-amber-300  shadow-lg">
      <Image
        alt="Location"
        src={warehouse_pic_1}
        width={250}
        height={200}
        className="rounded-tl-2xl"
      />
      <div className="flex flex-col items-center  justify-center bg-lime-400 ">
        <div>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-700">
              {data.location.name}
            </CardTitle>

            <CardDescription className="text-gray-500"></CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col">
            <p className="text-gray-700">{data.location.address.street}</p>
            <p className="text-gray-700">{data.location.address.city}</p>
            <p className="text-gray-700">{data.location.address.postcode}</p>
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
                    this location and all of its contents.
                  </DialogDescription>
                </DialogHeader>
                <DialogTrigger>
                  <Button className="bg-red-500 font-extrabold hover:bg-purple-600">
                    OK
                  </Button>
                </DialogTrigger>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SingleManagedLocationCard;

var containsDuplicate = function (nums: number[]) {};
