import { useSelector } from "react-redux";
import { Button } from "../button/button";
import styles from "./tabs.module.css";
import { selectRestrauntById } from "../../redux/entities/restraunt/slice";

export const Tabs = ({ list, activeElId, onChangeActiveTab }) => {
  const getRestrauntName = (restrauntId) => {
    const restraunt = useSelector((state) =>
      selectRestrauntById(state, restrauntId)
    );

    return restraunt.name;
  };

  return (
    <div className={styles.tabs}>
      {list.map((id) => (
        <Button
          key={id}
          disabled={id === activeElId}
          onClick={() => onChangeActiveTab(id)}
        >
          {getRestrauntName(id)}
        </Button>
      ))}
    </div>
  );
};
