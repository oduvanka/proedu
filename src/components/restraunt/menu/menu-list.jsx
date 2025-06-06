import styles from "./menu.module.css";
import { Dish } from "./dish";
import { MAX_COUNT } from "./const";
import { HelpText } from "../../helpText/help-text";

export const MenuList = ({ menu }) => {
  if (!menu.length) return <p>no data</p>;

  return (
    <>
      <HelpText>no more than {MAX_COUNT} dishes for per person</HelpText>
      <ul className={styles.menu}>
        {menu.map(({ id, name, ingredients, price }) => (
          <li key={id}>
            <Dish dishName={name} ingredients={ingredients} price={price} />
          </li>
        ))}
      </ul>
    </>
  );
};
