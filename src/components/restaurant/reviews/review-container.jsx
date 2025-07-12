import { use } from "react";
import { Review } from "./rewiew";
import { UsersContext } from "../../users/users-context";

export const ReviewContainer = ({ review }) => {
  const { userId, text, rating } = review;

  const { users } = use(UsersContext);
  const user = users.find((item) => item.id === userId);

  const { name } = !!user ? user : { name: "Mr. X" };

  return <Review name={name} text={text} rating={rating} />;
};
