// Карточка ресторана
import { Menu } from "./menu/menu";
import { Reviews } from "./reviews/reviews";

export const Restraunt = ({ name, menu, reviews }) => {
  return (
    <div>
      <h2>{name}</h2>
      <div className="wrapper">
        <Menu menu={menu} />
      </div>
      <Reviews reviews={reviews} />
    </div>
  );
};
