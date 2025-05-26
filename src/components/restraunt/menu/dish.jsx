import { Counter } from "../../counter/counter";

// Карточка блюда
export const Dish = ({ dishName }) => {
  return (
    <div>
      <div>{dishName}</div>
      <Counter />
    </div>
  );
};
