"use client";

import { UsersContext } from "./users-context";

export const UsersProvider = ({ users, children }) => {
  return <UsersContext value={{ users }}>{children}</UsersContext>;
};
