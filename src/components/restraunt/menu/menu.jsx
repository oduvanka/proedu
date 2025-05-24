import { Dish } from "./dish";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
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
