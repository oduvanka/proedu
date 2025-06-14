import { useParams } from "react-router";
import { MenuContainer } from "../components/restaurant/menu/menu-container";

export const MenuPage = () => {
  const { restaurantId } = useParams();

  if (!restaurantId) return null;

  return <MenuContainer id={restaurantId} />;
};
