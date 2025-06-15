export const SERVER = "http://localhost:3001/api";

export const REQUEST_URL = {
  RESTAURANTS: () => `/restaurants`,
  RESTAURANT: (restaurantId) => `/restaurant/${restaurantId}`,

  DISHES: () => `/dishes`,
  DISH: (dishId) => `/dish/${dishId}`,

  REVIEWS: () => `/reviews`,
  RESTAURANT_REVIEWS: (restaurantId) => `/review/${restaurantId}`,
  REVIEW: (reviewId) => `/review/${reviewId}`,

  USERS: () => `/users`,
};

export const REQUEST_STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  FULFILLED: "fulfilled",
  ERROR: "rejected",
};

export const CURRENCY = "y.e.";
