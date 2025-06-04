import { useEffect, useRef } from "react";
import { ProgressBar } from "../progress-bar/progress-bar";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = ({ children }) => {
  const contentRef = useRef(null);

  return (
    <div className="wrap-layout">
      <Header />
      <ProgressBar scrollAreaRef={contentRef} />
      <div className="wrap-content" ref={contentRef}>
        {children}
        <Footer />
      </div>
    </div>
  );
};
