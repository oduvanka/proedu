import { useCounter } from "./useCounter";
import { checkIsMax, checkIsMin } from "./utils";

export const Counter = () => {
  const { count, onDecrement, onIncrement } = useCounter();

  return (
    <div>
      <button disabled={checkIsMin(count)} onClick={onDecrement}>
        -
      </button>
      {count}
      <button disabled={checkIsMax(count)} onClick={onIncrement}>
        +
      </button>
    </div>
  );
};
