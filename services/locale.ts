"use server";

import { cookies, headers } from "next/headers";
import { Locale, defaultLocale, locales } from "@/i18n/config";

const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale() {
  const userLocaleFromCookie = cookies().get(COOKIE_NAME)?.value;

  if (userLocaleFromCookie) {
    return userLocaleFromCookie;
  }

  const acceptLanguage = headers().get("accept-language");

  if (acceptLanguage) {
    const preferredLocales = acceptLanguage.split(",").map((lang) => {
      const [locale] = lang.split(";");
      return locale.split("-")[0].trim();
    });

    const matchedLocale = preferredLocales.find((locale) =>
      locales.includes(locale as Locale)
    );

    if (matchedLocale) {
      return matchedLocale;
    }
  }

  return defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  cookies().set(COOKIE_NAME, locale);
}
