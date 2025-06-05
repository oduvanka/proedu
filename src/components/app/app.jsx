import "normalize.css";
import "./global.css";
import { Content } from "./content/content";
import { Layout } from "./layout/layout";
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
