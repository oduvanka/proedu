import { Outlet } from "react-router";
import styles from "./restaurants.module.css";
import { Tabs } from "../tabs/tabs";
import { TabLink } from "../tabs/tab";
import { Loader } from "../loader/loader";
import { ErrorReject } from "../errors/error-reject";
import { useGetRestaurantsQuery } from "../../redux/api";

export const Restaurants = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) return <Loader />;
  if (isError) return <ErrorReject />;
  if (!data.length) return <div>no restaurants available</div>;

  return (
    <main className={styles.content}>
      <Tabs>
        {data.map(({ id, name }) => (
          <TabLink key={id} url={id} text={name} />
        ))}
      </Tabs>
      <Outlet />
    </main>
  );
};
