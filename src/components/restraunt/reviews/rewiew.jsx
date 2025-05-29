// Карточка отзыва

export const Review = ({ name, text, rating }) => {
  return (
    <div>
      <h4>{name}</h4>
      <div>{text}</div>
      <div>{rating}</div>
    </div>
  );
};
