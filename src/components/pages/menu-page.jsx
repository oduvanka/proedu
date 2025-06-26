"use client";

import { useParams } from "next/navigation";
import { useGetDishesByRestaurantIdQuery } from "../../redux/api";
import { Menu } from "../restaurant/menu/menu";
import { Loader } from "../loader/loader";
import { ErrorReject } from "../errors/error-reject";

export const MenuPage = () => {
  const { restaurantId } = useParams();

  const { data, isLoading, isError } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading) return <Loader />;

  if (isError) return <ErrorReject />;

  return <Menu menu={data} />;
};

export default MenuPage;
