// smart dump component ресторана
import { Restaurant } from "./restaurant";

export const RestaurantContainer = ({ restaurant }) => {
  const { name } = restaurant;

  return <Restaurant name={name} />;
};
