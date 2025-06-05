import styles from "./help-text.module.css";

export const HelpText = ({ children }) => {
  return <small className={styles.secondaryText}>{children}</small>;
};
