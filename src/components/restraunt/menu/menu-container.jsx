import { useSelector } from "react-redux";
import { selectRestrauntById } from "../../../redux/entities/restraunt/slice";
import { Menu } from "./menu";

export const MenuContainer = ({ id }) => {
  const restraunt =
    useSelector((state) => selectRestrauntById(state, id)) || {};

  const { menu } = restraunt;

  return <Menu menu={menu} />;
};
