import { REQUEST_URL, SERVER } from "@/globalconst";

export const getDishById = async (dishId) => {
  const responce = await fetch(`${SERVER}${REQUEST_URL.DISH}/${dishId}`);

  if (!responce.ok) {
    return { error: responce.status, data: null };
  }

  if (responce.status === 404) {
    return { error: null, data: null };
  }

  const result = await responce.json();

  return { error: null, data: result };
};
