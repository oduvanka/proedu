import { notFound } from "next/navigation";
import { Restaurant } from "../restaurant/restaurant";
import { getRestaurants } from "../../services/get-restaurants";

const RestaurantPage = async ({ params, children }) => {
  const { restaurantId } = await params;

  const { data: restaurants } = await getRestaurants();

  const restaurant = restaurants.find(({ id }) => id === restaurantId);

  if (!restaurant) return notFound();

  const { name } = restaurant;

  return (
    <Restaurant restaurantId={restaurantId} name={name}>
      {children}
    </Restaurant>
  );
};

export default RestaurantPage;
