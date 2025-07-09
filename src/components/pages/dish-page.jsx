import { notFound } from "next/navigation";
import { Dish } from "../restaurant/menu/dish";
import { getDishById } from "../../services/get-dish-by-id";

const DishPage = async ({ params }) => {
  const { dishId } = await params;

  const { data: dish } = await getDishById(dishId);

  if (!dish) return notFound();

  const { id, name, ingredients, price } = dish;

  return (
    <Dish dishId={id} name={name} ingredients={ingredients} price={price} />
  );
};

export default DishPage;
