import { useSelector } from "react-redux";
import { selectDishById } from "../../../redux/entities/dish/slice";
import { Dish } from "./dish";
import { useRequest } from "../../../redux/hooks/use-request";
import { getDishByDishId } from "../../../redux/entities/dish/get-dish-by-dishId";
import { REQUEST_STATUS } from "../../app/const";
import { Loader } from "../../loader/loader";
import { ErrorReject } from "../../errors/error-reject";

export const DishContainer = ({ dish }) => {
  const { id, name, ingredients, price } = dish;

  return (
    <Dish dishId={id} name={name} ingredients={ingredients} price={price} />
  );
};
