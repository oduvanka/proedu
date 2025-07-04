import { Suspense } from "react";
import Loading from "../../../components/loader/loading";

const DishLayout = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default DishLayout;
