"use server";

import { revalidatePath } from "next/cache";
import { REQUEST_URL, SERVER } from "../components/app/const";

export async function addReviewAction({ restaurantId, review, pathname }) {
  const result = await fetch(`${SERVER}${REQUEST_URL.REVIEW}/${restaurantId}`, {
    method: "POST",
    body: JSON.stringify(review),
    headers: { "Content-Type": "application/json" },
  });

  revalidatePath(pathname);

  return result.json();
}
