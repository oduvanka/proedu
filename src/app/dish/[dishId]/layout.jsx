import { Suspense } from "react";
import { Loader } from "../../../components/loader/loader";

const DishLayout = ({ children }) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export default DishLayout;
