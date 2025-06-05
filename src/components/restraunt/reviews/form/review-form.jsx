import { Counter } from "../../../counter/counter";
import { MAX_RATING, MIN_RATING, STEP_RATING } from "./const";
import { useFormReview } from "./use-form-review";
import styles from "./form.module.css";

export const ReviewForm = () => {
  const { form, onChangeName, onChangeText, onChangeRating, clear } =
    useFormReview();

  const { name, text, rating } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    clear();
    alert("Thanks!");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <p>Leave your review</p>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={onChangeName}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="text">Text:</label>
        <textarea id="text" required value={text} onChange={onChangeText} />
      </div>
      <div className={styles.formGroup}>
        <label>Rating:</label>
        <Counter
          count={rating}
          min={MIN_RATING}
          max={MAX_RATING}
          onDecrement={onChangeRating(rating - STEP_RATING)}
          onIncrement={onChangeRating(rating + STEP_RATING)}
        />
      </div>

      <div className={styles.buttonToolbar}>
        <button type="button" onClick={clear}>
          Clear
        </button>
        <button type="submit" className={styles.mainBtn}>
          Submit
        </button>
      </div>
    </form>
  );
};
