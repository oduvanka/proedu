"use client";

import { notFound, useParams } from "next/navigation";
import { Restaurant } from "../restaurant/restaurant";
import { getRestaurants } from "../../services/get-restaurants";

export const RestaurantPage = async ({ children }) => {
  const { restaurantId } = useParams();

  const { data: restaurants } = await getRestaurants();

  const restaurant = restaurants.find(({ id }) => id === restaurantId);

  if (!restaurant) return notFound();

  const { name } = restaurant;

  return <Restaurant name={name}>{children}</Restaurant>;
};

export default RestaurantPage;
