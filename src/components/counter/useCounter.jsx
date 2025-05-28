import { useState } from "react";
import { checkIsMax, checkIsMin } from "./utils";

export const useCounter = (initCount) => {
  const [count, setCount] = useState(initCount);

  const onDecrement = () =>
    setCount((val) => (checkIsMin(val) ? val : val - 1));
  const onIncrement = () =>
    setCount((val) => (checkIsMax(val) ? val : val + 1));

  return { count, onDecrement, onIncrement };
};
