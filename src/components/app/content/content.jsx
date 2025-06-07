import { useState } from "react";
import styles from "./content.module.css";
import { Tabs } from "../../tabs/tabs";
import { useSelector } from "react-redux";
import { selectRestrauntIds } from "../../../redux/entities/restraunt/slice";
import { RestrauntContainer } from "../../restraunt/restaurant-container";

export const Content = () => {
  const restrauntIds = useSelector(selectRestrauntIds);
  const [activeRestrauntId, setActiveRestrauntId] = useState(restrauntIds[0]);

  if (!restrauntIds.length) return <div>no restaurants available</div>;

  return (
    <main className={styles.content}>
      <Tabs
        list={restrauntIds}
        activeElId={activeRestrauntId}
        onChangeActiveTab={setActiveRestrauntId}
      />

      <RestrauntContainer key={activeRestrauntId} id={activeRestrauntId} />
    </main>
  );
};
