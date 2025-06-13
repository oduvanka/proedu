import { useParams } from "react-router";
import { MenuContainer } from "../components/restraunt/menu/menu-container";

export const MenuPage = () => {
  const { restrauntId } = useParams();

  if (!restrauntId) return null;

  return <MenuContainer id={restrauntId} />;
};
