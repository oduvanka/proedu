import { useSelector } from "react-redux";
import { selectReviewById } from "../../../redux/entities/review/slice";
import { selectUserById } from "../../../redux/entities/user/slice";
import { Review } from "./rewiew";

export const ReviewContainer = ({ reviewId }) => {
  const review =
    useSelector((state) => selectReviewById(state, reviewId)) || {};
  const { userId, text, rating } = review;

  const user = useSelector((state) => selectUserById(state, userId)) || {};
  const { name } = user;

  return <Review name={name} text={text} rating={rating} />;
};
