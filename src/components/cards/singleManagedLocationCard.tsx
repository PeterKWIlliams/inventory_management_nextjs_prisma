import { type FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/Card";
import Image from "next/image";
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

import { type managedLocationGetById } from "~/types/routerOutputTypes";

interface SingleManagedLocationCardProps {
  data: managedLocationGetById;
  onClickDelete: () => void;
}

const SingleManagedLocationCard: FC<SingleManagedLocationCardProps> = ({
  data,
  onClickDelete,
}) => {
  if (!data) return null;
  return (
    <Card className="relative grid grid-cols-1 rounded-md border border-black bg-zinc-50 shadow-md">
      <div className="h-56 w-80 ">
        <Image
          className="h-full w-full rounded-tl-md rounded-tr-md"
          alt="Location"
          src={data.image_url}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col items-center  justify-center ">
        <div>
          <CardContent className="flex flex-col">
            <p className="text-gray-700">{data?.location.address.street}</p>
            <p className="text-gray-700">{data?.location.address.city}</p>
            <p className="text-gray-700">{data?.location.address.postcode}</p>
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
  );
};

export default SingleManagedLocationCard;
