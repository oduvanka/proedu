import React from "react";
import { Review } from "./rewiew";
import styles from "./reviews.module.css";

export const ReviewsList = ({ reviews }) => {
  if (!reviews.length) return <p>no data</p>;

  return (
    <ul className={styles.reviews}>
      {reviews.map(({ id, user, text, rating }) => (
        <li key={id}>
          <Review name={user} text={text} rating={rating} />
        </li>
      ))}
    </ul>
  );
};
