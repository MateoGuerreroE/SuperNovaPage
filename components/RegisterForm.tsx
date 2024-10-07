"use client";
import { validCountries } from "@/data/common";
import { AuthType } from "@/types/types";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";

type ComponentProps = {
  changeAuthType: (val: AuthType) => void;
};

export default function RegisterForm({ changeAuthType }: ComponentProps) {
  const t = useTranslations("NavBar");
  const locale = useLocale();
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Input
          isRequired
          type="text"
          label={t("name")}
          labelPlacement="inside"
          radius="sm"
        ></Input>
        <Input
          isRequired
          type="email"
          label={t("email")}
          labelPlacement="inside"
          radius="sm"
        ></Input>
        <Select
          isRequired
          className="font-mulish"
          radius="sm"
          label={t("country")}
          classNames={{
            popoverContent: "bg-zinc-800 text-white",
          }}
        >
          {validCountries.map((country) => (
            <SelectItem key={country.code}>
              {locale === "en" ? country.name.en : country.name.es}
            </SelectItem>
          ))}
        </Select>
        <Input
          isRequired
          type={`${isPasswordVisible ? "text" : "password"}`}
          label={t("password")}
          labelPlacement="inside"
          radius="sm"
          endContent={
            <img
              src={isPasswordVisible ? "/icons/eye-off.svg" : "/icons/eye.svg"}
              className="w-5 self-center hover:cursor-pointer opacity-65"
              onClick={() => setPasswordVisible(!isPasswordVisible)}
            />
          }
        ></Input>
        <Input
          isRequired
          type={`${isPasswordVisible ? "text" : "password"}`}
          label={t("repeatPassword")}
          labelPlacement="inside"
          radius="sm"
          endContent={
            <img
              src={isPasswordVisible ? "/icons/eye-off.svg" : "/icons/eye.svg"}
              className="w-5 self-center hover:cursor-pointer opacity-65"
              onClick={() => setPasswordVisible(!isPasswordVisible)}
            />
          }
        ></Input>
        <Button>{t("registerButton")}</Button>
      </div>
      <div className="text-center text-sm">
        <p className="text-white/60">{t("registerSwitchText")}</p>
        <a
          onClick={() => changeAuthType("login")}
          className="underline hover:cursor-pointer"
        >
          {t("registerAnchor")}
        </a>
      </div>
    </div>
  );
}
