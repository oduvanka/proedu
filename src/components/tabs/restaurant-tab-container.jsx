import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import { TabLink } from "./tab";

export const RestaurantTab = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const { name } = restaurant;

  return <TabLink url={restaurantId} text={name} />;
};
