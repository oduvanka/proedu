"use client";

import { useCallback, useContext, useOptimistic } from "react";
import { usePathname } from "next/navigation";
import { Reviews } from "../reviews/reviews";

import { addReviewAction } from "../../../actions/add-review-action";
import { MAX_RATING } from "./form/const";
import { AuthContext } from "../../auth/auth-context";

const ReviewsContainer = ({ restaurantId, reviews }) => {
  const { auth } = useContext(AuthContext);

  const pathname = usePathname();

  const [optimisticReviews, addOptimisticReview] = useOptimistic(
    reviews,
    (currentState, optimisticValue) => [
      ...currentState,
      { ...optimisticValue, id: "creating" },
    ]
  );

  const handleAddReview = useCallback(
    async (state, formData) => {
      const INIT_FORM = {
        name: auth.name,
        text: "",
        rating: MAX_RATING,
      };

      // для обнуления формы
      if (formData === null) {
        return INIT_FORM;
      }

      const text = formData.get("text");
      const rating = formData.get("rating");

      const review = { text, rating, userId: auth.id };

      addOptimisticReview(review);

      await addReviewAction({ restaurantId, pathname, review });

      return INIT_FORM;
    },
    [restaurantId, pathname, addOptimisticReview, auth.id, auth.name]
  );

  return (
    <Reviews reviews={optimisticReviews} submitFormAction={handleAddReview} />
  );
};

export default ReviewsContainer;
