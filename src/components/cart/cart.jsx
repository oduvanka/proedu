import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../redux/entities/cart/slice";
import styles from "./cart.module.css";
import { DishInCart } from "./dish-in-cart";
import { CURRENCY } from "../app/const";

export const Cart = () => {
  const items = useSelector(selectCartItems);
  const sum = useSelector(selectTotalPrice);

  if (!items.length) return null;

  return (
    <div className={styles.cartWrapper}>
      <h3 className={styles.cartSum}>
        Cart = {sum} {CURRENCY}
      </h3>
      <ul className={styles.cartItems}>
        {items.map(({ id, amount }) => (
          <li key={id} className={styles.cartItem}>
            <DishInCart id={id} amount={amount} />
          </li>
        ))}
      </ul>
    </div>
  );
};
