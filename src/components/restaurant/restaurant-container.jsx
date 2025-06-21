// smart dump component ресторана
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import { Restaurant } from "./restaurant";

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant =
    useSelector((state) => selectRestaurantById(state, restaurantId)) || {};

  const { name } = restaurant;

  return <Restaurant name={name} />;
};
