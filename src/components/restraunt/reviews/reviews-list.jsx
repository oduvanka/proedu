import React from "react";
import styles from "./reviews.module.css";
import { ReviewContainer } from "./review-container";

export const ReviewsList = ({ reviews }) => {
  if (!reviews.length) return <p>no data</p>;

  return (
    <ul className={styles.reviews}>
      {reviews.map((id) => (
        <li key={id}>
          <ReviewContainer id={id} />
        </li>
      ))}
    </ul>
  );
};
