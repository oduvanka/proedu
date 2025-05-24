// Карточка ресторана
import { Menu } from "./menu/menu";
import { Reviews } from "./reviews/reviews";

export const Restraunt = ({ id, name, menu, reviews }) => {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};
