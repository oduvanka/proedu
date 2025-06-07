import "normalize.css";
import "./global.css";
import { Content } from "./content/content";
import { Layout } from "./layout/layout";
import { ThemeProvider } from "../theme/theme-provider";
import { AuthProvider } from "../auth/auth-provider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <Layout>
            <Content />
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
};
