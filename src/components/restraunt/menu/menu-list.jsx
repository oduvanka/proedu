import { Dish } from "./dish";
import { MAX_COUNT } from "./const";

export const MenuList = ({ menu }) => {
  if (!menu.length) return <p>no data</p>;

  return (
    <>
      <small>no more than {MAX_COUNT} dishes for per person</small>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <Dish dishName={item.name} />
          </li>
        ))}
      </ul>
    </>
  );
};
