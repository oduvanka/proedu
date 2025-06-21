import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../redux/entities/restaurant/slice";
import { Menu } from "./menu";
import { useRequest } from "../../../redux/hooks/use-request";
import { REQUEST_STATUS } from "../../app/const";
import { Loader } from "../../loader/loader";
import { ErrorReject } from "../../errors/error-reject";
import { getDishes } from "../../../redux/entities/dish/get-dishes";

export const MenuContainer = ({ restaurantId }) => {
  const restaurant =
    useSelector((state) => selectRestaurantById(state, restaurantId)) || {};

  const requestStatus = useRequest(getDishes, restaurantId);

  if (
    requestStatus === REQUEST_STATUS.IDLE ||
    requestStatus === REQUEST_STATUS.PENDING
  )
    return <Loader />;

  if (requestStatus === REQUEST_STATUS.ERROR) return <ErrorReject />;

  const { menu } = restaurant;

  return <Menu menu={menu} />;
};
