import { notFound } from "next/navigation";
import { REQUEST_URL, SERVER } from "../../../components/app/const";
import { Dish } from "../../../components/restaurant/menu/dish";

const Page = async ({ params }) => {
  const { dishId } = await params;

  const result = await fetch(`${SERVER}${REQUEST_URL.DISH}/${dishId}`);
  const dish = await result.json();

  if (!dish) notFound();

  const { id, name, ingredients, price } = dish;

  return (
    <Dish dishId={id} name={name} ingredients={ingredients} price={price} />
  );
};

export default Page;
