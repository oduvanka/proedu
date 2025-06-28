"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./padges.module.css";
import { AuthContext } from "../auth/auth-context";
import { AuthButton } from "../auth/auth-button";

export const HomePage = () => {
  const router = useRouter();

  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth.isAuthorized) router.push("restaurants");
  }, [auth.isAuthorized, router]);

  return (
    <div className={styles.homePage}>
      <div className={styles.homePageContent}>
        <p>Hello!</p>
        <AuthButton isSmall={false} />
      </div>
    </div>
  );
};

export default HomePage;
