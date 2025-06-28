import App from "../components/app/app";

export const metadata = {
  title: "ProEdu",
  description: "Next js app",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
};

export default RootLayout;
