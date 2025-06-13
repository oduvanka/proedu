import { useContext } from "react";
import { AuthContext } from "./auth-context";
import { Button } from "../button/button";

export const BtnAuth = ({ isSmall }) => {
  const { auth, toogleAuth } = useContext(AuthContext);

  const { isAuthorized, name } = auth;

  return (
    <Button isSmall={isSmall} onClick={toogleAuth}>
      <small>{isAuthorized ? `Logout (${name})` : "Login"}</small>
    </Button>
  );
};
