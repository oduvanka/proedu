import { Menu } from "../restaurant/menu/menu";
import { getDishesByRestaurantId } from "../../services/get-dishes-by-restaurantId";
import { notFound } from "next/navigation";

const MenuPage = async ({ params }) => {
  const { restaurantId } = await params;

  const { data: menu } = await getDishesByRestaurantId(restaurantId);

  if (!menu) return notFound();

  return <Menu menu={menu} />;
};

export default MenuPage;
