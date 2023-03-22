import { api } from "../utils/api";
import Trpc from "./api/trpc/[trpc]";
import Image from "next/image";

export default function Address() {
  const { mutate: deleteAddress } = api.address.delete.useMutation();
  const { data: addresses, isLoading } = api.address.getAll.useQuery();
  const { mutate: updateAddress } = api.address.update.useMutation();
  const { mutate: createAddress } = api.address.create.useMutation();
  const { mutate: createUser } = api.user.create.useMutation();
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <ul>
        {addresses?.map((address) => {
          const { id, street, city, postcode } = address;
          return (
            <li key={id}>
              <p>{street}</p>
              <p>{city}</p>
              <p>{postcode}</p>
            </li>
          );
        })}
      </ul>

      <button
        onClick={() => {
          console.log(addresses);
          createAddress({
            street: "test",
            city: "test",
            postcode: "test",
          });
        }}
      >
        create
      </button>
      <button
        onClick={() => {
          console.log(addresses);
          createAddress({
            street: "test",
            city: "test",
            postcode: "test",
          });
        }}
      >
        delete
      </button>
      <button
        onClick={() => {
          console.log(addresses);
          createAddress({
            street: "test",
            city: "test",
            postcode: "test",
          });
        }}
      >
        update
      </button>
      <button
        onClick={() => {
          console.log(addresses);
          createAddress({
            street: "test",
            city: "test",
            postcode: "test",
          });
        }}
      ></button>
    </div>
  );
}
