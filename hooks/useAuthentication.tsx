import { loginEntity } from "@/actions/loginEntity";
import { useGeneralStore } from "@/stores/generalStore";
import { AuthResponse, LoginRequest } from "@/types";
import { useState } from "react";

interface AuthSuccess {
  isAuthenticated: boolean;
  data: AuthResponse | null;
}

type AuthLocalResponse = AuthSuccess;

export const useAuthentication = (): {
  localeAuth: AuthLocalResponse;
  loginUser: (req: LoginRequest) => Promise<boolean>;
  loginAdmin: (req: LoginRequest) => Promise<boolean>;
  logout: () => void;
} => {
  const [localeAuth, setLocalAuth] = useState<AuthLocalResponse>({
    isAuthenticated: false,
    data: null,
  });
  const { setAuth } = useGeneralStore();

  const loginUser = async (req: LoginRequest): Promise<boolean> => {
    const response = await loginEntity(req, "user");
    if (response) {
      setLocalAuth({
        isAuthenticated: true,
        data: response,
      });
      setAuth(response);
      return true;
    }
    return false;
  };

  const loginAdmin = async (req: LoginRequest): Promise<boolean> => {
    const response = await loginEntity(req, "admin");
    if (response) {
      setLocalAuth({
        isAuthenticated: true,
        data: response,
      });
      setAuth(response);
      return true;
    }
    return false;
  };

  const logout = () => {
    setLocalAuth({
      isAuthenticated: false,
      data: null,
    });
    setAuth(null);
  };

  return { loginUser, loginAdmin, localeAuth, logout };
};
