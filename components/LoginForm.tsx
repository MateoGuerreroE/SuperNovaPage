import { AuthType } from "@/types/types";
import { Button, Input } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React from "react";

type ComponentProps = {
  changeAuthType: (val: AuthType) => void;
};

export default function LoginForm({ changeAuthType }: ComponentProps) {
  const t = useTranslations("NavBar");
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Input
          type="email"
          label={t("email")}
          labelPlacement="inside"
          radius="sm"
        ></Input>
        <Input
          type="password"
          label={t("password")}
          labelPlacement="inside"
          radius="sm"
        ></Input>
        <Button>{t("logButton")}</Button>
      </div>
      <div className="text-center text-sm">
        <p className="text-white/60">{t("loginSwitchText")}</p>
        <a
          onClick={() => changeAuthType("register")}
          className="underline hover:cursor-pointer"
        >
          {t("loginAnchor")}
        </a>
      </div>
    </div>
  );
}
