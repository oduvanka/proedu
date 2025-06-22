import styles from "./menu.module.css";
import { MAX_COUNT } from "./const";
import { HelpText } from "../../helpText/help-text";
import { Dish } from "../menu/dish";

export const MenuList = ({ menu }) => {
  if (!menu?.length) return <p>no data</p>;

  return (
    <>
      <div className={styles.maxDishes}>
        <HelpText>no more than {MAX_COUNT} dishes for per person</HelpText>
      </div>
      <ul className={styles.menu}>
        {menu.map(({ id, name, ingredients, price }) => (
          <li key={id}>
            <Dish
              dishId={id}
              name={name}
              ingredients={ingredients}
              price={price}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
