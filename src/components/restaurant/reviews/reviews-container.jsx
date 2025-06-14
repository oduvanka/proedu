import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../redux/entities/restaurant/slice";
import { Reviews } from "./reviews";

export const ReviewsContainer = ({ id }) => {
  const restaurant = useSelector(
    (state) => selectRestaurantById(state, id) || {}
  );

  const { reviews } = restaurant;

  return <Reviews reviews={reviews} />;
};
