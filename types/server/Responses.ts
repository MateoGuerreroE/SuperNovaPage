export interface AuthResponse {
  token: string;
  emailAddress: string;
  entityId: string;
  role: "user" | "admin"; //? Extend this to member when added
  fullName: string;
}

export interface FailedRequest {
  isSuccess: false;
  debugMessage: string;
  showMessage: string;
  statusCode: number;
}

export interface SuccessRequest<T> {
  isSuccess: true;
  response: T;
}

export interface FormActionResponse<T> {
  isSuccess: boolean;
  data: T | null;
}
