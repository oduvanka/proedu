// Карточка отзыва
import styles from "./reviews.module.css";

export const Review = ({ name, text, rating }) => {
  return (
    <div className={styles.review}>
      <span className={styles.rating}>{rating}</span>
      <span className={styles.text}>{text}</span>
      <small className="secondary-text"> ({name})</small>
    </div>
  );
};
