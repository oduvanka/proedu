import { useSelector } from "react-redux";
import { selectRestrauntById } from "../../redux/entities/restraunt/slice";
import { Tab } from "./tab";

export const RestrauntTab = ({ restrauntId }) => {
  const restraunt = useSelector((state) =>
    selectRestrauntById(state, restrauntId)
  );

  const { name } = restraunt;

  return <Tab url={restrauntId} text={name} />;
};
