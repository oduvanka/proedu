import { Counter } from "../../counter/counter";
import { useCounter } from "../../counter/useCounter";
import { MAX_COUNT, MIN_COUNT } from "./const";

// Карточка блюда
export const Dish = ({ dishName, ingredients, price }) => {
  const { count, onDecrement, onIncrement } = useCounter(MIN_COUNT);

  return (
    <div>
      <h4>{dishName}</h4>
      <div>ingredients: {ingredients.join(", ")}</div>
      <div>{price} y.e.</div>
      <Counter
        count={count}
        min={MIN_COUNT}
        max={MAX_COUNT}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
      />
    </div>
  );
};
