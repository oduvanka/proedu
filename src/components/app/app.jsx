"use client";

import "normalize.css";
import "./global.css";
import { Layout } from "./layout/layout";
import { ThemeProvider } from "../theme/theme-provider";
import { AuthProvider } from "../auth/auth-provider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

export const App = ({ children }) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
