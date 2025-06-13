// smart dump component ресторана
import { useSelector } from "react-redux";
import { selectRestrauntById } from "../../redux/entities/restraunt/slice";
import { Restraunt } from "./restaurant";

export const RestrauntContainer = ({ id }) => {
  const restraunt =
    useSelector((state) => selectRestrauntById(state, id)) || {};

  const { name } = restraunt;

  return <Restraunt name={name} />;
};
