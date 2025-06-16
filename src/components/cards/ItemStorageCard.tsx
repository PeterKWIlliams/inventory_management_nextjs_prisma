import { type FC } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/Card';
import Image from 'next/image';

import { type ManagedLocation } from '@prisma/client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/Dialog';
import { Button } from '../ui/Button';
import { Icons } from '../Icons';

interface ItemStorageCardProps {
  imgUrl: string;
  storageData: ManagedLocation;
  onClickDelete: () => void;
}

const ItemStorageCard: FC<ItemStorageCardProps> = ({
  imgUrl,
  storageData,
  onClickDelete,
}) => {
  return (
    <Card className="relative grid grid-cols-1 rounded-md border border-black bg-zinc-50 shadow-md">
      <div className="h-56 w-80">
        <Image
          className="h-full w-full rounded-tl-md rounded-tr-md"
          alt="Location"
          src={imgUrl}
          width={0}
          height={0}
          sizes="100vw"
          unoptimized
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-700"></CardTitle>

            <CardDescription className="text-gray-500"></CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col">
            <ul>
              <li className="text-gray-700">
                Created At:
                {storageData.createdAt.toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: '2-digit',
                })}
              </li>
            </ul>
          </CardContent>
          <div className="absolute bottom-2 right-2" style={{ color: 'red' }}>
            <Dialog>
              <DialogTrigger>
                <Icons.BadgeX className="hover:text-purple-600" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    this storage and all of its contents.
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

export default ItemStorageCard;
