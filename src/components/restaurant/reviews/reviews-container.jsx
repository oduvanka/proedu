import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../redux/entities/restaurant/slice";
import { Reviews } from "./reviews";
import { useRequest } from "../../../redux/hooks/use-request";
import { getReviews } from "../../../redux/entities/review/get-reviews";
import { getUsers } from "../../../redux/entities/user/get-users";
import { REQUEST_STATUS } from "../../app/const";
import { Loader } from "../../loader/loader";
import { ErrorReject } from "../../errors/error-reject";

export const ReviewsContainer = ({ restaurantId }) => {
  const restaurant = useSelector(
    (state) => selectRestaurantById(state, restaurantId) || {}
  );

  const requestStatusRewiews = useRequest(getReviews, restaurantId);
  const requestStatusUsers = useRequest(getUsers);

  if (
    requestStatusRewiews === REQUEST_STATUS.IDLE ||
    requestStatusUsers === REQUEST_STATUS.IDLE ||
    requestStatusRewiews === REQUEST_STATUS.PENDING ||
    requestStatusUsers === REQUEST_STATUS.PENDING
  )
    return <Loader />;

  if (requestStatusRewiews === REQUEST_STATUS.ERROR) return <ErrorReject />;

  const { reviews } = restaurant;

  return <Reviews reviews={reviews} />;
};
