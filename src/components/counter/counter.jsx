import { useCounter } from "./useCounter";

export const Counter = () => {
  const { count, onDecrement, onIncrement, checkIsMin, checkIsMax } =
    useCounter();

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
