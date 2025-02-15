import { FailedRequest, SuccessRequest } from "@/types/server/Responses";
import axios, { AxiosRequestConfig, Method } from "axios";

async function serverRequest<T>(
  method: Method,
  servicePath: string,
  payload?: any,
  config?: AxiosRequestConfig,
  failedMessage?: string,
): Promise<SuccessRequest<T> | FailedRequest> {
  try {
    const { data } = await axios.request<T>({
      method,
      url: servicePath,
      data: payload,
      ...config,
    });
    return {
      isSuccess: true,
      response: data,
    };
  } catch (error: any) {
    const showMessage = failedMessage || "An error occurred";
    return {
      isSuccess: false,
      showMessage,
      debugMessage: error.message,
      statusCode: error.statusCode || 500,
    };
  }
}

export async function serverPostRequest<T>(
  payload: any,
  servicePath: string,
  config?: AxiosRequestConfig,
  failedMessage?: string,
): Promise<SuccessRequest<T> | FailedRequest> {
  return serverRequest<T>("POST", servicePath, payload, config, failedMessage);
}

export async function serverGetRequest<T>(
  servicePath: string,
  config?: AxiosRequestConfig,
  failedMessage?: string,
): Promise<SuccessRequest<T> | FailedRequest> {
  return serverRequest<T>("GET", servicePath, undefined, config, failedMessage);
}
