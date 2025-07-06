import { REQUEST_URL, SERVER } from "../components/app/const";

export const getUsers = async () => {
  const responce = await fetch(`${SERVER}${REQUEST_URL.USERS}`, {
    cache: "no-store",
  });

  if (!responce.ok) {
    return { error: responce.status, data: null };
  }

  if (responce.status === 404) {
    return { error: null, data: null };
  }

  const result = await responce.json();

  return { error: null, data: result };
};
