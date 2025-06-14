import { useContext, useRef } from "react";
import { Outlet } from "react-router";
import styles from "./layout.module.css";
import { ProgressBar } from "../../progress-bar/progress-bar";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Cart } from "../../cart/cart";
import { AuthContext } from "../../auth/auth-context";

export const Layout = () => {
  const contentRef = useRef(null);

  const { auth } = useContext(AuthContext);

  return (
    <div className={styles.wrapLayout}>
      <Header />
      <ProgressBar scrollAreaRef={contentRef} />
      <div className={styles.wrapContent} ref={contentRef}>
        <Outlet />
      </div>
      {auth.isAuthorized && <Cart />}
      <Footer />
    </div>
  );
};
