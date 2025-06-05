import "normalize.css";
import "./global.css";
import { Content } from "./content";
import { Layout } from "./layout";
import { ThemeProvider } from "../theme/theme-provider";

export const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Content />
      </Layout>
    </ThemeProvider>
  );
};
