import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import styles from "./restaurants.module.css";
import { Tabs } from "../tabs/tabs";
import { RestaurantTab } from "../tabs/restaurant-tab-container";
import { selectRestaurantIds } from "../../redux/entities/restaurant/slice";

export const Restaurants = () => {
  const restaurantIds = useSelector(selectRestaurantIds);

  if (!restaurantIds.length) return <div>no restaurants available</div>;

  return (
    <main className={styles.content}>
      <Tabs>
        {restaurantIds.map((id) => (
          <RestaurantTab key={id} restaurantId={id} />
        ))}
      </Tabs>
      <Outlet />
    </main>
  );
};
