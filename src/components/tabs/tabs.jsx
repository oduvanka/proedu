import { Button } from "../button/button";
import styles from "./tabs.module.css";

export const Tabs = ({ list, activeElId, onChangeActiveTab }) => {
  return (
    <div className={styles.tabs}>
      {list.map(({ id, name }) => (
        <Button
          key={id}
          disabled={id === activeElId}
          onClick={() => onChangeActiveTab(id)}
        >
          {name}
        </Button>
      ))}
    </div>
  );
};
