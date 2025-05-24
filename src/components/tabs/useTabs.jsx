import { useState } from "react";

export const useTabs = (list) => {
  const [activeElId, setActiveElId] = useState(list.length ? list[0].id : null);

  const onChangeActiveTab = (newVal) => {
    setActiveElId(newVal);
  };

  return { activeElId, onChangeActiveTab };
};
