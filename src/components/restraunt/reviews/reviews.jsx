import { Review } from "./rewiew";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Rewiews</h3>
      <ul>
        {reviews.map((item) => (
          <li key={item.id}>
            <Review text={item.text} />
          </li>
        ))}
      </ul>
    </div>
  );
};
