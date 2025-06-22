import { useContext } from "react";
import styles from "./reviews.module.css";
import { ReviewForm } from "./form/review-form";
import { ReviewsList } from "./reviews-list";
import { AuthContext } from "../../auth/auth-context";

export const Reviews = ({ reviews, isFeedbackSubmission, onAddReview }) => {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      <h3 className={styles.reviewsHeader}>Rewiews</h3>
      <ReviewsList reviews={reviews} />
      {auth.isAuthorized && (
        <ReviewForm
          isFeedbackSubmission={isFeedbackSubmission}
          onSubmitForm={onAddReview}
        />
      )}
    </div>
  );
};
