import { DishPage } from "../../../components/pages/dish-page";
import { getDishById } from "../../../services/get-dish-by-id";

export const generateMetadata = async ({ params }) => {
  const { dishId } = await params;

  const { data } = await getDishById(dishId);

  if (data)
    return {
      title: data.name,
    };
};

export default DishPage;
