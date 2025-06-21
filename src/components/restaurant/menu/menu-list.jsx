import styles from "./menu.module.css";
import { MAX_COUNT } from "./const";
import { HelpText } from "../../helpText/help-text";
import { DishTileContainer } from "./dish-tile-container";

export const MenuList = ({ menu }) => {
  if (!menu.length) return <p>no data</p>;

  return (
    <>
      <div className={styles.maxDishes}>
        <HelpText>no more than {MAX_COUNT} dishes for per person</HelpText>
      </div>
      <ul className={styles.menu}>
        {menu.map((dishId) => (
          <li key={dishId}>
            <DishTileContainer dishId={dishId} />
          </li>
        ))}
      </ul>
    </>
  );
};
