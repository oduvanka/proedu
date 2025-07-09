import ReviewsContainer from "../restaurant/reviews/reviews-container";
import { getReviewsByRestaurantId } from "../../services/get-reviews-by-restaurantId";
import { getUsers } from "../../services/get-users";
import { UsersProvider } from "../users/users-provider";

const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;

  const [{ data: reviews }, { data: users }] = await Promise.all([
    getReviewsByRestaurantId(restaurantId),
    getUsers(),
  ]);

  if (!reviews) return notFound();

  return (
    <UsersProvider users={users}>
      <ReviewsContainer restaurantId={restaurantId} reviews={reviews} />
    </UsersProvider>
  );
};

export default ReviewsPage;
