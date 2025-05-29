import { Dish } from "./dish";
import { MAX_COUNT } from "./const";

export const MenuList = ({ menu }) => {
  if (!menu.length) return <p>no data</p>;

  return (
    <>
      <small>no more than {MAX_COUNT} dishes for per person</small>
      <ul>
        {menu.map(({ id, name, ingredients, price }) => (
          <li key={id}>
            <Dish dishName={name} ingredients={ingredients} price={price} />
          </li>
        ))}
      </ul>
    </>
  );
};
