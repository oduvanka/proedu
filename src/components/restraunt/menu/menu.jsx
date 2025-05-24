import { MAX_COUNT } from "../../counter/const";
import { Dish } from "./dish";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      <small>no more than {MAX_COUNT} dishes for per person</small>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <Dish dishName={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
