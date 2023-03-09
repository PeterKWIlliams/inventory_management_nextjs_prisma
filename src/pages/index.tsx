import { api } from "../utils/api";

const Items = () => {
  const { data: items, isLoading } = api.item.getAll.useQuery();
  const { mutate: deleteItem } = api.item.delete.useMutation();

  if (isLoading) return <div>Fetching messages...</div>;
  //   console.log(items);
  return (
    <div className="flex flex-col gap-4">
      {items?.map((item) => {
        const { id, name } = item;
        return <></>;
      })}
    </div>
  );
};

export default Items;
