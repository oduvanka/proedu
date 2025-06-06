import { createContext } from "react";

export const INIT_AUTH = { isAuthorized: false };

export const AuthContext = createContext(INIT_AUTH);
