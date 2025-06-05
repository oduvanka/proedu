import styles from "./tabs.module.css";

export const Tabs = ({ list, activeElId, onChangeActiveTab }) => {
  return (
    <div className={styles.tabs}>
      {list.map(({ id, name }) => (
        <button
          key={id}
          disabled={id === activeElId}
          onClick={() => onChangeActiveTab(id)}
          className={styles.tab}
        >
          {name}
        </button>
      ))}
    </div>
  );
};
