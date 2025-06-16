import { useSelector } from "react-redux";
import { selectReviewById } from "../../../redux/entities/review/slice";
import { selectUserById } from "../../../redux/entities/user/slice";
import { Review } from "./rewiew";
import { useRequest } from "../../../redux/hooks/use-request";
import { getUsers } from "../../../redux/entities/user/get-users";
import { getReviews } from "../../../redux/entities/review/get-reviews";
import { Loader } from "../../loader/loader";
import { ErrorReject } from "../../errors/error-reject";
import { REQUEST_STATUS } from "../../app/const";

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id)) || {};
  const { userId, text, rating } = review;

  const user = useSelector((state) => selectUserById(state, userId)) || {};
  const { name } = user;

  const requestStatusRewiews = useRequest(getReviews);
  const requestStatusUsers = useRequest(getUsers);

  if (
    requestStatusRewiews === REQUEST_STATUS.IDLE ||
    requestStatusUsers === REQUEST_STATUS.IDLE ||
    requestStatusRewiews === REQUEST_STATUS.PENDING ||
    requestStatusUsers === REQUEST_STATUS.PENDING
  )
    return <Loader />;

  if (requestStatusRewiews === REQUEST_STATUS.ERROR) return <ErrorReject />;

  return <Review name={name} text={text} rating={rating} />;
};
