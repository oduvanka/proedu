// Карточка отзыва
import classNames from "classnames";
import styles from "./reviews.module.css";

export const Review = ({ name, text, rating }) => {
  const isGood = rating >= 4;
  const isBad = rating <= 2;

  const reviewClass = classNames({
    [styles.review]: true,
    [styles.reviewGood]: isGood,
    [styles.reviewBad]: isBad,
  });

  return (
    <div className={reviewClass}>
      <span className={styles.rating}>{rating}</span>
      <span className={styles.text}>{text}</span>
      <small className="secondary-text"> ({name})</small>
    </div>
  );
};
