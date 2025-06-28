import { Counter } from "../../../counter/counter";
import { MAX_RATING, MIN_RATING, STEP_RATING } from "./const";
import { useFormReview } from "./use-form-review";
import styles from "./form.module.css";
import { Button } from "../../../button/button";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../auth/auth-context";

export const ReviewForm = ({ isFeedbackSubmission, onSubmitForm }) => {
  const { auth } = useContext(AuthContext);

  const { form, onChangeName, onChangeText, onChangeRating, clear } =
    useFormReview();

  useEffect(() => {
    onChangeName({ target: { value: auth.name } });
  }, [auth.name]);

  const { name, text, rating } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitForm(form).then(() => clear());
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <p>Leave your review</p>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          disabled
          required
          value={name}
          onChange={onChangeName}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="text">Text:</label>
        <textarea
          id="text"
          disabled={isFeedbackSubmission}
          required
          value={text}
          onChange={onChangeText}
          className={styles.reviewText}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Rating:</label>
        <Counter
          count={rating}
          min={MIN_RATING}
          max={MAX_RATING}
          disabledButtons={isFeedbackSubmission}
          onDecrement={onChangeRating(rating - STEP_RATING)}
          onIncrement={onChangeRating(rating + STEP_RATING)}
        />
      </div>

      <div className={styles.buttonToolbar}>
        <Button type="button" disabled={isFeedbackSubmission} onClick={clear}>
          Clear
        </Button>
        <Button disabled={isFeedbackSubmission} type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};
