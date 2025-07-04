// Карточка ресторана
import { useParams } from "next/navigation";
import styles from "./restaurant.module.css";
import { Tabs } from "../tabs/tabs";
import { TabLink } from "../tabs/tab";

export const Restaurant = ({ name, children }) => {
  const { restaurantId } = useParams();

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
