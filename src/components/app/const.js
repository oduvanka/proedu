export const SERVER = "http://localhost:3001/api";

export const REQUEST_URL = {
  RESTAURANTS: "/restaurants", // GET
  RESTAURANT: "/restaurant", // GET (params restaurantId)

  DISHES: "/dishes", // GET (query restaurantId, dishId)
  DISH: "/dish", // GET (params dishId)

  REVIEWS: "/reviews", // GET (query restaurantId)
  REVIEW: "/review", // POST (params restaurantId), PATCH (params reviewId)

  USERS: "/users", // GET
};

export const REQUEST_STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  FULFILLED: "fulfilled",
  ERROR: "rejected",
};

export const CURRENCY = "y.e.";
