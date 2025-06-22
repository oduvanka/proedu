import { useGetUsersQuery } from "../../../redux/api";
import { Review } from "./rewiew";

export const ReviewContainer = ({ review }) => {
  const { userId, text, rating } = review;

  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data.find(({ id }) => id === userId),
    }),
  });
  const { name } = user;

  return <Review name={name} text={text} rating={rating} />;
};
