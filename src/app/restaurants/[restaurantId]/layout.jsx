import RestaurantPage from "../../../components/pages/restaurant-page";

export const generateStaticParams = () => {
  return [
    { restaurantId: "bb8afbec-2fec-491f-93e9-7f13950dd80b" },
    { restaurantId: "d9241927-09e1-44f3-8986-a76346869037" },
  ];
};

const RestaurantLayout = ({ children }) => {
  return (
    <div>
      <RestaurantPage>{children}</RestaurantPage>
    </div>
  );
};

export default RestaurantLayout;
