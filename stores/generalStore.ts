import { AuthResponse } from "@/types";
import { create } from "zustand";

export type AuthOptions = {
  isVisible: boolean;
  type: "login" | "register";
};

export interface GeneralState {
  auth: AuthResponse | null;
  setAuth: (value: AuthResponse | null) => void;
}

export const useGeneralStore = create<GeneralState>((set) => ({
  auth: null,
  setAuth: (value: AuthResponse | null) => set({ auth: value }),
}));
