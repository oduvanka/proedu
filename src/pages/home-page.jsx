import styles from "./padges.module.css";
import { BtnAuth } from "../components/auth/button-auth";
import { useContext } from "react";
import { AuthContext } from "../components/auth/auth-context";
import { Navigate, useNavigate } from "react-router";

export const HomePage = () => {
  const { auth } = useContext(AuthContext);

  if (auth.isAuthorized) return <Navigate to="restraunts" replace />;

  return (
    <div className={styles.homePage}>
      <div className={styles.homePageContent}>
        <p>Hello!</p>
        <BtnAuth isSmall={false} />
      </div>
    </div>
  );
};
