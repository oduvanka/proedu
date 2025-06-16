import { useSelector } from "react-redux";
import { selectDishById } from "../../../redux/entities/dish/slice";
import { Dish } from "./dish";
import { getDishes } from "../../../redux/entities/dish/get-dishes";
import { useRequest } from "../../../redux/hooks/use-request";
import { REQUEST_STATUS } from "../../app/const";
import { Loader } from "../../loader/loader";
import { ErrorReject } from "../../errors/error-reject";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id)) || {};

  const { name, ingredients, price } = dish;

  const requestStatus = useRequest(getDishes);

  if (
    requestStatus === REQUEST_STATUS.IDLE ||
    requestStatus === REQUEST_STATUS.PENDING
  )
    return <Loader />;

  if (requestStatus === REQUEST_STATUS.ERROR) return <ErrorReject />;

  return <Dish id={id} name={name} ingredients={ingredients} price={price} />;
};
