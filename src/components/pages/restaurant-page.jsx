"use client";

import { useParams } from "next/navigation";
import { RestaurantContainer } from "../restaurant/restaurant-container";
import { useGetRestaurantsQuery } from "../../redux/api";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data.find(({ id }) => id === restaurantId),
    }),
  });

  if (!restaurant) return null;

  return <RestaurantContainer restaurant={restaurant} />;
};

export default RestaurantPage;
