import styles from "./tabs.module.css";

export const Tabs = ({ children }) => {
  return <div className={styles.tabs}>{children}</div>;
};
