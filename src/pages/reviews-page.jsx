import { useParams } from "react-router";
import { ReviewsContainer } from "../components/restaurant/reviews/reviews-container";

export const ReviewsPage = () => {
  const { restaurantId } = useParams();

  if (!restaurantId) return null;

  return <ReviewsContainer restaurantId={restaurantId} />;
};
