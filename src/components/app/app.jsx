import "normalize.css";
import "./global.css";
import { Restaurants } from "../restaurants/restaurants";
import { Layout } from "./layout/layout";
import { ThemeProvider } from "../theme/theme-provider";
import { AuthProvider } from "../auth/auth-provider";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { store } from "../../redux/store";
import { RestaurantPage } from "../../pages/restaurant-page";
import { NotFoundPage } from "./404.jsx";
import { DishPage } from "../../pages/dish-page";
import { MenuPage } from "../../pages/menu-page";
import { ReviewsPage } from "../../pages/reviews-page";
import { HomePage } from "../../pages/home-page";

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <ThemeProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" index element={<HomePage />} />
                <Route path="restaurants" element={<Restaurants />}>
                  <Route path=":restaurantId" element={<RestaurantPage />}>
                    <Route index element={<Navigate to="menu" replace />} />
                    <Route path="menu" index element={<MenuPage />} />
                    <Route path="reviews" element={<ReviewsPage />} />
                  </Route>
                </Route>
                <Route path="dish">
                  <Route index element={<Navigate to="/" />} replace />
                  <Route path=":dishId" element={<DishPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </ThemeProvider>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  );
};
