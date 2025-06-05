import "normalize.css";
import "./global.css";
import { Content } from "./content";
import { Layout } from "./layout";
import { ThemeProvider } from "../theme/theme-provider";
import { AuthProvider } from "../auth/auth-provider";

export const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Layout>
          <Content />
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
};
