export type AuthType = "login" | "register";

export interface CountryInfo {
  code: string;
  name: {
    en: string;
    es: string;
  };
}

export type ValidCountryList = CountryInfo[];
