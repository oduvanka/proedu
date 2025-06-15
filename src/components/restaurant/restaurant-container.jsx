// smart dump component ресторана
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import { Restaurant } from "./restaurant";

export const RestaurantContainer = ({ id }) => {
  const restaurant =
    useSelector((state) => selectRestaurantById(state, id)) || {};

  const { name } = restaurant;

  return <Restaurant name={name} />;
};
