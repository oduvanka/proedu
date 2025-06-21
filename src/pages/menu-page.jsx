import { useParams } from "react-router";
import { useGetDishesByRestaurantIdQuery } from "../redux/api";
import { Menu } from "../components/restaurant/menu/menu";
import { Loader } from "../components/loader/loader";
import { ErrorReject } from "../components/errors/error-reject";

export const MenuPage = () => {
  const { restaurantId } = useParams();

  const { data, isLoading, isError } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading) return <Loader />;

  if (isError) return <ErrorReject />;

  return <Menu menu={data} />;
};
