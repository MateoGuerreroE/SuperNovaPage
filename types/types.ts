export type AuthType = "login" | "register";

export interface CountryInfo {
  code: string;
  name: {
    en: string;
    es: string;
  };
}

export type ValidCountryList = CountryInfo[];

export interface MenuItem {
  translateKey: string;
  redirect: string;
  key: string;
}

export type MenuItemList = MenuItem[];
