// Карточка ресторана
import styles from "./restaurant.module.css";
import { Tabs } from "../tabs/tabs";
import { TabLink } from "../tabs/tab";
import { Outlet } from "react-router";

export const Restaurant = ({ name }) => {
  return (
    <div>
      <h2 className={styles.restaurantHeader}>{name}</h2>

      <Tabs>
        <TabLink url="menu" text="Menu" />
        <TabLink url="reviews" text="Reviews" />
      </Tabs>

      <Outlet />
    </div>
  );
};
