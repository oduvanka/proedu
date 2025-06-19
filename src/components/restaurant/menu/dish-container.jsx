import { useSelector } from "react-redux";
import { selectDishById } from "../../../redux/entities/dish/slice";
import { Dish } from "./dish";
import { useRequest } from "../../../redux/hooks/use-request";
import { getDish } from "../../../redux/entities/dish/get-dish";
import { REQUEST_STATUS } from "../../app/const";
import { Loader } from "../../loader/loader";
import { ErrorReject } from "../../errors/error-reject";

export const DishContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId)) || {};

  const requestStatus = useRequest(getDish, dishId);

  if (requestStatus === REQUEST_STATUS.PENDING) return <Loader />;

  if (requestStatus === REQUEST_STATUS.ERROR) return <ErrorReject />;

  const { name, ingredients, price } = dish;

  return (
    <Dish dishId={dishId} name={name} ingredients={ingredients} price={price} />
  );
};
