import { useContext } from "react";
import styles from "./menu.module.css";
import { Counter } from "../../counter/counter";
import { useCounter } from "../../counter/useCounter";
import { MAX_COUNT, MIN_COUNT } from "./const";
import { AuthContext } from "../../auth/auth-context";
import { CURRENCY } from "../../app/const";

// Карточка блюда
export const Dish = ({ id, name, ingredients, price }) => {
  const { auth } = useContext(AuthContext);

  const { count, onDecrement, onIncrement } = useCounter(id, price);

  return (
    <div className={styles.card}>
      <div className={styles.dish}>
        <h4 className={styles.name}>{name}</h4>
        <div className={styles.price}>
          {price} {CURRENCY}
        </div>
      </div>
      <div title="ingredients" className={styles.ingredients}>
        {ingredients.join(", ")}
      </div>
      {auth.isAuthorized && (
        <div className={styles.counter}>
          <Counter
            count={count}
            min={MIN_COUNT}
            max={MAX_COUNT}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
          />
        </div>
      )}
    </div>
  );
};
