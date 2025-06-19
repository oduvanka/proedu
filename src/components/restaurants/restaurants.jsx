import { useEffect } from "react";
import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import styles from "./restaurants.module.css";
import { Tabs } from "../tabs/tabs";
import { RestaurantTab } from "../tabs/restaurant-tab-container";
import {
  selectRequestStatus,
  selectRestaurantsIds,
} from "../../redux/entities/restaurant/slice";
import { getRestaurants } from "../../redux/entities/restaurant/get-restaurants";
import { REQUEST_STATUS } from "../app/const";
import { useRequest } from "../../redux/hooks/use-request";
import { Loader } from "../loader/loader";
import { ErrorReject } from "../errors/error-reject";

export const Restaurants = () => {
  const restaurantIds = useSelector(selectRestaurantsIds);

  const requestStatus = useRequest(getRestaurants);

  if (requestStatus === REQUEST_STATUS.PENDING) return <Loader />;
  if (requestStatus === REQUEST_STATUS.ERROR) return <ErrorReject />;
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
