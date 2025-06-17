import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { selectDishById } from "../../../redux/entities/dish/slice";
import { Dish } from "./dish";
import { useRequest } from "../../../redux/hooks/use-request";
import { getDish } from "../../../redux/entities/dish/get-dish";
import { REQUEST_STATUS } from "../../app/const";
import { Loader } from "../../loader/loader";
import { ErrorReject } from "../../errors/error-reject";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id)) || {};

  const { pathname } = useLocation();
  const isDishPage = pathname === `/dish/${id}`;

  if (isDishPage) {
    const requestStatus = useRequest(getDish, id);

    if (
      requestStatus === REQUEST_STATUS.IDLE ||
      requestStatus === REQUEST_STATUS.PENDING
    )
      return <Loader />;

    if (requestStatus === REQUEST_STATUS.ERROR) return <ErrorReject />;
  }

  const { name, ingredients, price } = dish;

  return (
    <Dish
      id={id}
      name={name}
      ingredients={ingredients}
      price={price}
      isDishPage={isDishPage}
    />
  );
};
