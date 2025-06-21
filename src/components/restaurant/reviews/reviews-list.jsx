import React from "react";
import styles from "./reviews.module.css";
import { ReviewContainer } from "./review-container";

export const ReviewsList = ({ reviews }) => {
  if (!reviews.length) return <p>no data</p>;

  return (
    <ul className={styles.reviews}>
      {reviews.map((reviewId) => (
        <li key={reviewId}>
          <ReviewContainer reviewId={reviewId} />
        </li>
      ))}
    </ul>
  );
};
