import { useState } from "react";
import { AuthContext, INIT_AUTH } from "./auth-context";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(INIT_AUTH);

  const toogleAuth = () => {
    setAuth((currentAuth) => {
      return currentAuth.isAuthorized
        ? INIT_AUTH
        : {
            id: "c3d4abd4-c3ef-46e1-8719-eb17db1d6e99",
            name: "Lolly",
            isAuthorized: true,
          };
    });
  };

  return <AuthContext value={{ auth, toogleAuth }}>{children}</AuthContext>;
};
