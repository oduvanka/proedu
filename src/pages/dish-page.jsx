import { useParams } from "react-router";
import { DishContainer } from "../components/restaurant/menu/dish-container";
import { useGetDishByIdQuery } from "../redux/api";
import { Loader } from "../components/loader/loader";
import { ErrorReject } from "../components/errors/error-reject";

export const DishPage = () => {
  const { dishId } = useParams();

  const { data: dish, isLoading, isError } = useGetDishByIdQuery(dishId);

  if (isLoading) return <Loader />;

  if (isError) return <ErrorReject />;

  return <DishContainer dish={dish} />;
};
