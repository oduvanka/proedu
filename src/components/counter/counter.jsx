import { Button } from "../button/button";
import styles from "./counter.module.css";
import { checkIsMax, checkIsMin } from "./utils";

export const Counter = ({
  count,
  min,
  max,
  disabledButtons,
  onDecrement,
  onIncrement,
}) => {
  return (
    <div>
      <Button
        type="button"
        isSmall
        disabled={checkIsMin(min, count) || disabledButtons}
        onClick={onDecrement}
      >
        -
      </Button>
      <span className={styles.count}>{count}</span>
      <Button
        type="button"
        isSmall
        disabled={checkIsMax(max, count) || disabledButtons}
        onClick={onIncrement}
      >
        +
      </Button>
    </div>
  );
};
