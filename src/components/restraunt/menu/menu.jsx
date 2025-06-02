import { MenuList } from "./menu-list";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3 className="hidden">Menu</h3>
      <MenuList menu={menu} />
    </div>
  );
};
