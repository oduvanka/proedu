import { useParams } from "react-router";
import { RestrauntContainer } from "../components/restraunt/restaurant-container";

export const RestrauntPage = () => {
  const { restrauntId } = useParams();

  if (!restrauntId) return null;

  return <RestrauntContainer id={restrauntId} />;
};
