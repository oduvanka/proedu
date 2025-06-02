import styles from "./counter.module.css";
import { checkIsMax, checkIsMin } from "./utils";

export const Counter = ({ count, min, max, onDecrement, onIncrement }) => {
  return (
    <div>
      <button
        type="button"
        disabled={checkIsMin(min, count)}
        onClick={onDecrement}
        className={styles.btnCounter}
      >
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button
        type="button"
        disabled={checkIsMax(max, count)}
        onClick={onIncrement}
        className={styles.btnCounter}
      >
        +
      </button>
    </div>
  );
};
