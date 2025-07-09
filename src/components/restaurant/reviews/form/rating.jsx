import { useEffect, useState } from "react";
import { MAX_RATING, MIN_RATING, STEP_RATING } from "./const";
import { Counter } from "../../../counter/counter";

export const Rating = ({ rating, isDisabledButtons }) => {
  const [valueRating, setValueRating] = useState(rating);

  return (
    <Counter
      name="rating"
      count={valueRating}
      min={MIN_RATING}
      max={MAX_RATING}
      disabledButtons={isDisabledButtons}
      onDecrement={() =>
        setValueRating((currentRating) => currentRating - STEP_RATING)
      }
      onIncrement={() =>
        setValueRating((currentRating) => currentRating + STEP_RATING)
      }
    />
  );
};
