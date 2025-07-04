"use client";

import { useParams } from "next/navigation";
import { useGetRestaurantsQuery } from "../../redux/api";
import { Restaurant } from "../restaurant/restaurant";

export const RestaurantPage = ({ children }) => {
  const { restaurantId } = useParams();

  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data.find(({ id }) => id === restaurantId),
    }),
  });

  if (!restaurant) return null;

  const { name } = restaurant;

  return <Restaurant name={name}>{children}</Restaurant>;
};

export default RestaurantPage;
