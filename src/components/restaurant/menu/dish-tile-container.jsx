import { useSelector } from "react-redux";
import { selectDishById } from "../../../redux/entities/dish/slice";
import { Dish } from "./dish";

export const DishTileContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId)) || {};

  const { name, ingredients, price } = dish;

  return (
    <Dish dishId={dishId} name={name} ingredients={ingredients} price={price} />
  );
};
