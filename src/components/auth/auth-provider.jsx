import { useState } from "react";
import { AuthContext, INIT_AUTH } from "./auth-context";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(INIT_AUTH);

  return <AuthContext value={{ auth, setAuth }}>{children}</AuthContext>;
};
