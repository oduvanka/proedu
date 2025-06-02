import "normalize.css";
import "./global.css";
import { Content } from "./content";
import { Layout } from "./layout";

export const App = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  );
};
