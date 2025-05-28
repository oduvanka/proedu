import React from "react";
import { Review } from "./rewiew";

export const ReviewsList = ({ reviews }) => {
  if (reviews.length) return <p>no data</p>;

  return (
    <ul>
      {reviews.map((item) => (
        <li key={item.id}>
          <Review text={item.text} />
        </li>
      ))}
    </ul>
  );
};
