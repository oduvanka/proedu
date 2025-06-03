import { useState } from "react";

export const useProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll = (e) => {
    const scrollableElement = e.currentTarget;
    const { scrollTop, clientHeight, scrollHeight } = scrollableElement;

    const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;

    setProgress(percent.toFixed());
  };

  return { progress, handleScroll };
};
