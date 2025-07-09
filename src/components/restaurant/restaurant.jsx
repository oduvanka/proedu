// Карточка ресторана
import styles from "./restaurant.module.css";
import { Tabs } from "../tabs/tabs";
import { TabLink } from "../tabs/tab";

export const Restaurant = ({ restaurantId, name, children }) => {
  return (
    <div>
      <h2 className={styles.restaurantHeader}>{name}</h2>

      <Tabs>
        <TabLink url={`/restaurants/${restaurantId}/menu`} text="Menu" />
        <TabLink url={`/restaurants/${restaurantId}/reviews`} text="Reviews" />
      </Tabs>

      {children}
    </div>
  );
};
