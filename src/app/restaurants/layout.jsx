import Restaurants from "../../components/restaurants/restaurants";

const RestaurantsLayout = ({ children }) => {
  return (
    <div>
      <Restaurants>{children}</Restaurants>
    </div>
  );
};

export default RestaurantsLayout;
