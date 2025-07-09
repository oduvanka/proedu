import styles from "./restaurants.module.css";
import { Tabs } from "../tabs/tabs";
import { TabLink } from "../tabs/tab";
import { getRestaurants } from "../../services/get-restaurants";
import { notFound } from "next/navigation";

const Restaurants = async ({ children }) => {
  console.log("Restaurants");
  const { error, data } = await getRestaurants();

  if (error) throw new Error(error);
  if (!data) notFound();

  return (
    <main className={styles.content}>
      <Tabs>
        {data.map(({ id, name }) => (
          <TabLink key={id} url={`/restaurants/${id}`} text={name} />
        ))}
      </Tabs>
      {children}
    </main>
  );
};

export default Restaurants;
