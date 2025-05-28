import { MenuList } from "./menu-list";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      <MenuList menu={menu} />
    </div>
  );
};
