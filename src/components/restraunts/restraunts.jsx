import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import styles from "./restraunts.module.css";
import { Tabs } from "../tabs/tabs";
import { RestrauntTab } from "../tabs/restraunt-tab-container";
import { selectRestrauntIds } from "../../redux/entities/restraunt/slice";

export const Restraunts = () => {
  const restrauntIds = useSelector(selectRestrauntIds);

  if (!restrauntIds.length) return <div>no restaurants available</div>;

  return (
    <main className={styles.content}>
      <Tabs>
        {restrauntIds.map((id) => (
          <RestrauntTab key={id} restrauntId={id} />
        ))}
      </Tabs>
      <Outlet />
    </main>
  );
};
