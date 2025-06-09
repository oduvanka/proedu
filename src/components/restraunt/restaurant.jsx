// Карточка ресторана
import { Menu } from "./menu/menu";
import { Reviews } from "./reviews/reviews";

export const Restraunt = ({ name, menu, reviews }) => {
  return (
    <div>
      <h2>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};
