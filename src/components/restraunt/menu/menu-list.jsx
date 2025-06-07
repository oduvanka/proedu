import styles from "./menu.module.css";
import { MAX_COUNT } from "./const";
import { HelpText } from "../../helpText/help-text";
import { DishContainer } from "./dish-container";

export const MenuList = ({ menu }) => {
  if (!menu.length) return <p>no data</p>;

  return (
    <>
      <HelpText>no more than {MAX_COUNT} dishes for per person</HelpText>
      <ul className={styles.menu}>
        {menu.map((id) => (
          <li key={id}>
            <DishContainer id={id} />
          </li>
        ))}
      </ul>
    </>
  );
};
