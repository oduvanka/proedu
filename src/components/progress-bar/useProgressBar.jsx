import { useEffect, useState } from "react";

export const useProgressBar = (scrollAreaRef) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollableElement = e.currentTarget;
      const { scrollTop, clientHeight, scrollHeight } = scrollableElement;

      const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;

      setProgress(percent.toFixed());
    };

    scrollAreaRef.current.addEventListener("scroll", handleScroll);

    return () => {
      scrollAreaRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { progress };
};
