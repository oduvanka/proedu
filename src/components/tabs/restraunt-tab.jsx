import { useSelector } from "react-redux";
import { selectRestrauntById } from "../../redux/entities/restraunt/slice";
import { Button } from "../button/button";

export const RestrauntTab = ({ restrauntId, activeElId, onClick }) => {
  const restraunt = useSelector((state) =>
    selectRestrauntById(state, restrauntId)
  );
  const { name } = restraunt;

  return (
    <Button
      disabled={restrauntId === activeElId}
      onClick={() => onClick(restrauntId)}
    >
      {name}
    </Button>
  );
};
