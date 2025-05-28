import { ReviewsList } from "./reviews-list";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Rewiews</h3>
      <ReviewsList reviews={reviews} />
    </div>
  );
};
