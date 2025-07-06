//import { useContext } from "react";
//import { useAddReviewMutation } from "../../redux/api";
import { Reviews } from "../restaurant/reviews/reviews";
//import { AuthContext } from "../auth/auth-context";
import { getReviewsByRestaurantId } from "../../services/get-reviews-by-restaurantId";
import { getUsers } from "../../services/get-users";
import { UsersProvider } from "../users/users-provider";

export const ReviewsPage = async ({ params }) => {
  //const { auth } = useContext(AuthContext);

  const { restaurantId } = await params;

  const [{ data: reviews }, { data: users }] = await Promise.all([
    getReviewsByRestaurantId(restaurantId),
    getUsers(),
  ]);

  if (!reviews) return notFound();

  return (
    <UsersProvider users={users}>
      <Reviews
        reviews={reviews}
        //isFeedbackSubmission={isLoading}
        //onAddReview={handleAddReview}
      />
    </UsersProvider>
  );

  /*const {
    data: reviews,
    isLoading: isLoadingReviews,
    isError: isErrorReviews,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);

  const [addReviewMutation, { isLoading, isError }] = useAddReviewMutation();

  const handleAddReview = (review) =>
    addReviewMutation({
      restaurantId: restaurantId,
      review: { ...review, userId: auth.id },
    });
;*/
};

export default ReviewsPage;
