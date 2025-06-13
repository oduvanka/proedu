import "normalize.css";
import "./global.css";
import { Restraunts } from "../restraunts/restraunts";
import { Layout } from "./layout/layout";
import { ThemeProvider } from "../theme/theme-provider";
import { AuthProvider } from "../auth/auth-provider";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { store } from "../../redux/store";
import { RestrauntPage } from "../../pages/restraunt-page";
import { NotFoundPage } from "./404.jsx";
import { DishPage } from "../../pages/dish-page";
import { MenuPage } from "../../pages/menu-page";
import { ReviewsPage } from "../../pages/reviews-page";
import { HomePage } from "../../pages/home-page";
import { useContext } from "react";

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <ThemeProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" index element={<HomePage />} />
                <Route path="restraunts" element={<Restraunts />}>
                  <Route path=":restrauntId" element={<RestrauntPage />}>
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
