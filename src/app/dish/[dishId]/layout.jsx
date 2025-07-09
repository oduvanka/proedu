import { getDishById } from "../../../services/get-dish-by-id";

export const generateMetadata = async ({ params }) => {
  const { dishId } = await params;

  const { data } = await getDishById(dishId);

  if (data)
    return {
      title: data.name,
    };
};

const DishLayout = ({ children }) => {
  return <div>{children}</div>;
};

export default DishLayout;
