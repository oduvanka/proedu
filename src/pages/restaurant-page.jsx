import { useParams } from "react-router";
import { RestaurantContainer } from "../components/restaurant/restaurant-container";
import { useGetRestaurantsQuery } from "../redux/api";

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
