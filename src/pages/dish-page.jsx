import { useParams } from "react-router";
import { DishContainer } from "../components/restaurant/menu/dish-container";

export const DishPage = () => {
  const { dishId } = useParams();

  if (!dishId) return null;

  return <DishContainer id={dishId} />;
};
