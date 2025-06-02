import { useState } from "react";
import { restaurants } from "../../../materials/mock";
import { Restraunt } from "../restraunt/restaurant";
import { Tabs } from "../tabs/tabs";

export const Content = () => {
  const [activeRestrauntId, setActiveRestrauntId] = useState(restaurants[0].id);

  if (!restaurants.length) return <div>no restaurants available</div>;

  const activeRestraunt = restaurants.find(
    (item) => item.id === activeRestrauntId
  );

  const { name, menu, reviews } = activeRestraunt;

  return (
    <main className="content">
      <Tabs
        list={restaurants}
        activeElId={activeRestrauntId}
        onChangeActiveTab={setActiveRestrauntId}
      />

      <Restraunt
        id={activeRestrauntId}
        name={name}
        menu={menu}
        reviews={reviews}
      />
    </main>
  );
};
