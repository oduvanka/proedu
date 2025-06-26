"use client";

import { useParams } from "next/navigation";
import { Dish } from "../restaurant/menu/dish";
import { useGetDishByIdQuery } from "../../redux/api";
import { Loader } from "../loader/loader";
import { ErrorReject } from "../errors/error-reject";

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

export default DishPage;
