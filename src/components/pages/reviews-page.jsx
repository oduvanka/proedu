"use client";

import { useContext } from "react";
import { useParams } from "next/navigation";
import {
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
} from "../../redux/api";
import { Reviews } from "../restaurant/reviews/reviews";
import { Loader } from "../loader/loader";
import { ErrorReject } from "../errors/error-reject";
import { AuthContext } from "../auth/auth-context";

export const ReviewsPage = () => {
  const { auth } = useContext(AuthContext);

  const { restaurantId } = useParams();

  const {
    data: reviews,
    isLoading: isLoadingReviews,
    isError: isErrorReviews,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);
  const { isLoading: isLoadingUsers, isError: isErrorUsers } =
    useGetUsersQuery();

  const [addReviewMutation, { isLoading, isError }] = useAddReviewMutation();

  const handleAddReview = (review) =>
    addReviewMutation({
      restaurantId: restaurantId,
      review: { ...review, userId: auth.id },
    });

  if (isLoadingReviews || isLoadingUsers) return <Loader />;

  if (isErrorReviews || isErrorUsers) return <ErrorReject />;

  return (
    <Reviews
      reviews={reviews}
      isFeedbackSubmission={isLoading}
      onAddReview={handleAddReview}
    />
  );
};

export default ReviewsPage;
