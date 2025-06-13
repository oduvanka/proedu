// Карточка ресторана
import styles from "./restraunt.module.css";
import { Tabs } from "../tabs/tabs";
import { Tab } from "../tabs/tab";
import { Outlet } from "react-router";

export const Restraunt = ({ name }) => {
  return (
    <div>
      <h2 className={styles.restrauntHeader}>{name}</h2>

      <Tabs>
        <Tab url="menu" text="Menu" />
        <Tab url="reviews" text="Reviews" />
      </Tabs>

      <Outlet />
    </div>
  );
};
