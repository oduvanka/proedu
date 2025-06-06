import { useRef } from "react";
import styles from "./layout.module.css";
import { ProgressBar } from "../../progress-bar/progress-bar";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export const Layout = ({ children }) => {
  const contentRef = useRef(null);

  return (
    <div className={styles.wrapLayout}>
      <Header />
      <ProgressBar scrollAreaRef={contentRef} />
      <div className={styles.wrapContent} ref={contentRef}>
        {children}
      </div>
      <Footer />
    </div>
  );
};
