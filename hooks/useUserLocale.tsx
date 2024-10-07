import { Locale, defaultLocale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { useCallback, useEffect, useState } from "react";

const useUserLocale = (
  localeValue: Locale = defaultLocale
): [Locale, (value: Locale) => void] => {
  const [locale, setLocale] = useState<Locale>(localeValue);

  useEffect(() => {
    const storedLocale = sessionStorage.getItem("user-locale");
    if (storedLocale) {
      setLocale(storedLocale as Locale);
    } else {
      sessionStorage.setItem("user-locale", defaultLocale);
    }
  }, [localeValue]);

  const changeLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale);
    sessionStorage.setItem("user-locale", newLocale);
  }, []);

  return [locale, changeLocale];
};

export default useUserLocale;
