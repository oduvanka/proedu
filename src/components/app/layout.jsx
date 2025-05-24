import { Content } from "./content";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
