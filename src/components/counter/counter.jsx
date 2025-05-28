import { useCounter } from "./useCounter";
import { checkIsMax, checkIsMin } from "./utils";

export const Counter = ({ count, min, max, onDecrement, onIncrement }) => {
  return (
    <div>
      <button
        type="button"
        disabled={checkIsMin(min, count)}
        onClick={onDecrement}
      >
        -
      </button>
      {count}
      <button
        type="button"
        disabled={checkIsMax(max, count)}
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  );
};
