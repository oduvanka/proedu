"use client";

import { useActionState, useContext } from "react";
import { useFormStatus } from "react-dom";
import { MAX_RATING } from "./const";
import styles from "./form.module.css";
import { Button } from "../../../button/button";
import { AuthContext } from "../../../auth/auth-context";
import { Rating } from "./rating";

export const ReviewForm = ({ submitFormAction }) => {
  const { auth } = useContext(AuthContext);

  const [formState, submitAction] = useActionState(submitFormAction, {
    name: auth.name,
    text: "it`s wonderful",
    rating: MAX_RATING,
  });

  const { pending } = useFormStatus();

  const { name, text, rating } = formState;

  return (
    <form action={submitAction} className={styles.form}>
      <p>Leave your review</p>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          disabled
          required
          defaultValue={name}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="text">Text:</label>
        <textarea
          id="text"
          name="text"
          disabled={pending}
          required
          defaultValue={text}
          className={styles.reviewText}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Rating:</label>
        <Rating rating={rating} isDisabledButtons={pending} />
      </div>

      {formState.error && <div style={styles.errors}>{formState.error}</div>}

      <div className={styles.buttonToolbar}>
        <Button disabled={pending} formAction={() => submitAction(null)}>
          Clear
        </Button>
        <Button type="submit" disabled={pending}>
          Submit
        </Button>
      </div>
    </form>
  );
};
