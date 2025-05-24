import { useState } from "react";
import { MAX_COUNT, MIN_COUNT } from "./const";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const onDecrement = () =>
    setCount((val) => (checkIsMin(val) ? val : val - 1));
  const onIncrement = () =>
    setCount((val) => (checkIsMax(val) ? val : val + 1));

  const checkIsMin = (currentVal) => currentVal === MIN_COUNT;
  const checkIsMax = (currentVal) => currentVal === MAX_COUNT;

  return { count, onDecrement, onIncrement, checkIsMin, checkIsMax };
};
