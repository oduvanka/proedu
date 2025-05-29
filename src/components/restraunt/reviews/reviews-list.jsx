import React from "react";
import { Review } from "./rewiew";

export const ReviewsList = ({ reviews }) => {
  if (!reviews.length) return <p>no data</p>;

  return (
    <ul>
      {reviews.map(({ id, user, text, rating }) => (
        <li key={id}>
          <Review name={user} text={text} rating={rating} />
        </li>
      ))}
    </ul>
  );
};
