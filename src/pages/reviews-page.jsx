import { useParams } from "react-router";
import {
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
} from "../redux/api";
import { Reviews } from "../components/restaurant/reviews/reviews";
import { Loader } from "../components/loader/loader";
import { ErrorReject } from "../components/errors/error-reject";

export const ReviewsPage = () => {
  const { restaurantId } = useParams();

  const {
    data: reviews,
    isLoading: isLoadingReviews,
    isError: isErrorReviews,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);
  const {
    data: users,
    isLoading: isLoadingUsers,
    isError: isErrorUsers,
  } = useGetUsersQuery();

  if (isLoadingReviews || isLoadingUsers) return <Loader />;

  if (isErrorReviews || isErrorUsers) return <ErrorReject />;

  return <Reviews reviews={reviews} />;
};
