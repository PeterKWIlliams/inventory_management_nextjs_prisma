import { api } from "../utils/api";

const Items = () => {
  const { data: items, isLoading } = api.item.getAll.useQuery();

  if (isLoading) return <div>Fetching messages...</div>;
  {
    console.log(items);
  }
  return <div></div>;
};

export default Items;
