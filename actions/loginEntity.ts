"use server";

import { serverPostRequest } from "@/utils";
import { AuthResponse, LoginRequest } from "@/types";

export async function loginEntity(
  payload: LoginRequest,
  role: "admin" | "user",
): Promise<AuthResponse | void> {
  const serverUrl = process.env.SERVER_URL;
  const composedUrl = `${serverUrl}/auth/login/${role}`;

  const response = await serverPostRequest<AuthResponse>(
    payload,
    composedUrl,
    undefined,
    "Invalid credentials",
  );
  if (!response.isSuccess) {
    if (process.env.DEBUG_MODE === "1") {
      console.error(response.debugMessage);
    }
    return;
  }
  return response.response;
}
