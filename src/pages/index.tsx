import Sidebar from "@/components/Sidebar";
import DashboardPage from "@/components/dashboard/dashboard";
import { ItemStorage } from "@prisma/client";
import type { NextPage } from "next";

import { RouterOutputs, api } from "~/utils/api";

const Home: NextPage = () => {
  const { data, isLoading, error } = api.user.getAllData.useQuery();

  if (isLoading) return <div>loading</div>;
  if (!data) return <div>no data</div>;
  console.log(data);

  return (
    <Sidebar>
      <DashboardPage data={data} />
    </Sidebar>
  );
};

export default Home;

{
  /* reset button for the database<button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => {
          deleteItem.mutate();
          console.log("hello");
        }}
      /> */
}

export const data = [
  {
    id: "cln9hx6xs0005q5lakegjiaay",
    userId: "user_2Rq72ayndoAt4Icf9DzQXdbFvtC",
    locationId: "cln9hx6se0003q5lamv08cuf0",
    createdAt: "2023-10-02T23:02:17.440Z",
    updatedAt: "2023-10-02T23:02:17.440Z",
    itemStorage: [
      {
        id: "cln9i0c2a0007q5lafvwc0ake",
        name: "Storage 1",
        location: "outside",
        managedLocationId: "cln9hx6xs0005q5lakegjiaay",
        createdAt: "2023-10-02T23:04:44.015Z",
        updatedAt: "2023-10-02T23:04:44.015Z",
        storedItem: [
          {
            id: "cln9i27og0009q5lawk87a6pj",
            name: "green bicycle",
            itemStorageId: "cln9i0c2a0007q5lafvwc0ake",
            createdAt: "2023-10-02T23:06:11.635Z",
            updatedAt: "2023-10-02T23:06:11.635Z",
            ItemInfo: [
              {
                id: "cln9i27og000aq5lajt544dy1",
                desiredQuantity: 50,
                expiryDate: "2023-10-03T23:00:00.000Z",
                purchaseDate: "2023-09-30T23:00:00.000Z",
                purchasePrice: 50,
                storedItemId: "cln9i27og0009q5lawk87a6pj",
                baseItemId: "cln9i27og000bq5laaob7apgw",
                supplierId: null,
                createdAt: "2023-10-02T23:06:11.635Z",
                updatedAt: "2023-10-02T23:06:11.635Z",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "clna8q1sw000gq5latrr5q5bz",
    userId: "user_2Rq72ayndoAt4Icf9DzQXdbFvtC",
    locationId: "clna8q1oi000eq5lau5z0mc1u",
    createdAt: "2023-10-03T11:32:33.824Z",
    updatedAt: "2023-10-03T11:32:33.824Z",
    itemStorage: [
      {
        id: "clna8r1xl000iq5lafgpmrkgh",
        name: "fridge",
        location: "downstairs kitchen",
        managedLocationId: "clna8q1sw000gq5latrr5q5bz",
        createdAt: "2023-10-03T11:33:20.621Z",
        updatedAt: "2023-10-03T11:33:20.621Z",
        storedItem: [],
      },
    ],
  },
  {
    id: "clnboqjig0004q526k36ueu7p",
    userId: "user_2Rq72ayndoAt4Icf9DzQXdbFvtC",
    locationId: "clnboqjdp0002q526tjjn34bu",
    createdAt: "2023-10-04T11:48:36.809Z",
    updatedAt: "2023-10-04T11:48:36.809Z",
    itemStorage: [
      {
        id: "clnboracd0006q526x528qpve",
        name: "closet",
        location: "upsatirs",
        managedLocationId: "clnboqjig0004q526k36ueu7p",
        createdAt: "2023-10-04T11:49:11.554Z",
        updatedAt: "2023-10-04T11:49:11.554Z",
        storedItem: [],
      },
      {
        id: "clnboyhpg0008q5269dwy23uf",
        name: "Test router",
        location: "test router",
        managedLocationId: "clnboqjig0004q526k36ueu7p",
        createdAt: "2023-10-04T11:54:47.683Z",
        updatedAt: "2023-10-04T11:54:47.683Z",
        storedItem: [
          {
            id: "clnbp86ya000aq526lnnmt9wd",
            name: "test router item",
            itemStorageId: "clnboyhpg0008q5269dwy23uf",
            createdAt: "2023-10-04T12:02:20.289Z",
            updatedAt: "2023-10-04T12:02:20.289Z",
            ItemInfo: [
              {
                id: "clnbp86yb000bq526rdfbperk",
                desiredQuantity: 5,
                expiryDate: "2023-09-30T23:00:00.000Z",
                purchaseDate: "2023-09-30T23:00:00.000Z",
                purchasePrice: 5,
                storedItemId: "clnbp86ya000aq526lnnmt9wd",
                baseItemId: "clnbp86yb000cq526kwirnnda",
                supplierId: null,
                createdAt: "2023-10-04T12:02:20.289Z",
                updatedAt: "2023-10-04T12:02:20.289Z",
              },
            ],
          },
        ],
      },
    ],
  },
];
