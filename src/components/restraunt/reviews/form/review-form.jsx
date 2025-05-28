import { MAX_RATING, MIN_RATING } from "./const";
import { useFormReview } from "./use-form-review";

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
    <form onSubmit={handleSubmit}>
      <p>Enter your review, please!</p>
      <div>
        <label>
          Name:
          <input type="text" required value={name} onChange={onChangeName} />
        </label>
      </div>
      <div>
        <label>
          Text:
          <textarea required value={text} onChange={onChangeText} />
        </label>
      </div>
      <div>
        <label>
          Rating:
          <input
            type="range"
            min={MIN_RATING}
            max={MAX_RATING}
            step={1}
            value={rating}
            onChange={onChangeRating}
          />
          <output>{rating}</output>
        </label>
      </div>

      <button type="button" onClick={clear}>
        Clear
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};
