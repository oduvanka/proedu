import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./padges.module.css";
import { AuthButton } from "../components/auth/auth-button";
import { AuthContext } from "../components/auth/auth-context";

export const HomePage = () => {
  let navigate = useNavigate();

  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth.isAuthorized) navigate("restaurants", { replace: true });
  }, [auth.isAuthorized, navigate]);

  return (
    <div className={styles.homePage}>
      <div className={styles.homePageContent}>
        <p>Hello!</p>
        <AuthButton isSmall={false} />
      </div>
    </div>
  );
};
