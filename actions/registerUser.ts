"use server";

import { RegisterRequest } from "@/types";
import { serverPostRequest } from "@/utils";

export async function registerUser(
  payload: RegisterRequest,
): Promise<String | void> {
  const serverUrl = process.env.SERVER_URL;
  const composedUrl = `${serverUrl}/auth/register`;

  const response = await serverPostRequest<String>(
    payload,
    composedUrl,
    undefined,
  );
  if (!response.isSuccess) {
    if (process.env.DEBUG_MODE === "1") {
      console.error(response.debugMessage);
    }
    return;
  }
  return response.response;
}
