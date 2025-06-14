import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../redux/entities/restaurant/slice";
import { Menu } from "./menu";

export const MenuContainer = ({ id }) => {
  const restaurant =
    useSelector((state) => selectRestaurantById(state, id)) || {};

  const { menu } = restaurant;

  return <Menu menu={menu} />;
};
