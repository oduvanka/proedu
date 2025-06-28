import RestaurantPage from "../../../components/pages/restaurant-page";

const RestaurantLayout = ({ children }) => {
  return (
    <div>
      <RestaurantPage>{children}</RestaurantPage>
    </div>
  );
};

export default RestaurantLayout;
