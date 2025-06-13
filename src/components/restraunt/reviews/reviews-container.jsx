import { useSelector } from "react-redux";
import { selectRestrauntById } from "../../../redux/entities/restraunt/slice";
import { Reviews } from "./reviews";

export const ReviewsContainer = ({ id }) => {
  const restraunt = useSelector(
    (state) => selectRestrauntById(state, id) || {}
  );

  const { reviews } = restraunt;

  return <Reviews reviews={reviews} />;
};
