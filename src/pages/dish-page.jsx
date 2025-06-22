import { useParams } from "react-router";
import { Dish } from "../components/restaurant/menu/dish";
import { useGetDishByIdQuery } from "../redux/api";
import { Loader } from "../components/loader/loader";
import { ErrorReject } from "../components/errors/error-reject";

export const DishPage = () => {
  const { dishId } = useParams();

  const { data: dish, isLoading, isError } = useGetDishByIdQuery(dishId);

  if (isLoading) return <Loader />;

  if (isError) return <ErrorReject />;

  const { id, name, ingredients, price } = dish;

  return (
    <Dish dishId={id} name={name} ingredients={ingredients} price={price} />
  );
};
