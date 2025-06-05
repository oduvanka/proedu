import styles from "./menu.module.css";
import { Counter } from "../../counter/counter";
import { useCounter } from "../../counter/useCounter";
import { MAX_COUNT, MIN_COUNT } from "./const";

// Карточка блюда
export const Dish = ({ dishName, ingredients, price }) => {
  const { count, onDecrement, onIncrement } = useCounter(MIN_COUNT);

  return (
    <div className={styles.card}>
      <div className={styles.dish}>
        <h4 className={styles.name}>{dishName}</h4>
        <div className={styles.price}>{price} y.e.</div>
      </div>
      <div title="ingredients" className={styles.ingredients}>
        {ingredients.join(", ")}
      </div>
      <div className={styles.counter}>
        <Counter
          count={count}
          min={MIN_COUNT}
          max={MAX_COUNT}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
        />
      </div>
    </div>
  );
};
