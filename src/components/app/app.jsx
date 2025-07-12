import "normalize.css";
import "./global.css";
import { Layout } from "./layout/layout";
import { ThemeProvider } from "@/theme/theme-provider";
import { AuthProvider } from "@/auth/auth-provider";
import { ReduxProvider } from "../../redux/redux-provider";

export const App = ({ children }) => {
  return (
    <ReduxProvider>
      <AuthProvider>
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </AuthProvider>
    </ReduxProvider>
  );
};

export default App;
