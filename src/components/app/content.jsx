import { useMemo } from "react";
import { restaurants } from "../../../materials/mock";
import { Restraunt } from "../restraunt/restaurant";
import { Tabs } from "../tabs/tabs";
import { useTabs } from "../tabs/useTabs";

export const Content = () => {
  const { activeElId, onChangeActiveTab } = useTabs(restaurants);

  const activeRestraunt = useMemo(
    () => restaurants.find((item) => item.id === activeElId),
    [activeElId]
  );

  const { id, name, menu, reviews } = activeRestraunt;

  return (
    <main>
      <Tabs
        list={restaurants}
        activeElId={activeElId}
        onChangeActiveTab={onChangeActiveTab}
      />

      {restaurants.length ? (
        <Restraunt id={id} name={name} menu={menu} reviews={reviews} />
      ) : (
        <div>no restaurants available</div>
      )}
    </main>
  );
};
