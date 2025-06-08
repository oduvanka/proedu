import styles from "./tabs.module.css";
import { RestrauntTab } from "./restraunt-tab";

export const RestrauntTabs = ({ list, activeElId, onChangeActiveTab }) => {
  return (
    <div className={styles.tabs}>
      {list.map((id) => (
        <RestrauntTab
          key={id}
          restrauntId={id}
          activeElId={activeElId}
          onClick={onChangeActiveTab}
        />
      ))}
    </div>
  );
};
