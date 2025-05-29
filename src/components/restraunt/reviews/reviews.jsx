import { ReviewForm } from "./form/review-form";
import { ReviewsList } from "./reviews-list";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Rewiews</h3>
      <ReviewsList reviews={reviews} />
      <ReviewForm />
    </div>
  );
};
