import { useState } from "react";
import { AuthContext, INIT_AUTH } from "./auth-context";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(INIT_AUTH);

  const toogleAuth = () => {
    setAuth((currentAuth) => {
      return currentAuth.isAuthorized
        ? INIT_AUTH
        : { id: 1, name: "Julia", isAuthorized: true };
    });
  };

  return <AuthContext value={{ auth, toogleAuth }}>{children}</AuthContext>;
};
