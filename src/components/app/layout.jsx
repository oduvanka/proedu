import { ProgressBar } from "../progress-bar/progress-bar";
import { useProgressBar } from "../progress-bar/useProgressBar";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = ({ children }) => {
  const { progress, handleScroll } = useProgressBar();

  return (
    <div className="wrap-layout">
      <Header />
      <ProgressBar progress={progress} />
      <div className="wrap-content" onScroll={handleScroll}>
        {children}
        <Footer />
      </div>
    </div>
  );
};
