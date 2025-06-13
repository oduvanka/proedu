import { useParams } from "react-router";
import { ReviewsContainer } from "../components/restraunt/reviews/reviews-container";

export const ReviewsPage = () => {
  const { restrauntId } = useParams();

  if (!restrauntId) return null;

  return <ReviewsContainer id={restrauntId} />;
};
