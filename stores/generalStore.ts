import { create } from "zustand";

export type AuthOptions = {
  isVisible: boolean;
  type: "login" | "register";
};

export interface GeneralState {
  authOptions: AuthOptions;
  setAuthOptions: (value: Partial<AuthOptions>) => void;
}

export const useGeneralStore = create<GeneralState>((set) => ({
  authOptions: { isVisible: false, type: "login" },
  setAuthOptions: (value: Partial<AuthOptions>) =>
    set((state) => ({ authOptions: { ...state.authOptions, ...value } })),
}));
