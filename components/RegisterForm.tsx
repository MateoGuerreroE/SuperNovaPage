"use client";
import { registerUser } from "@/actions/registerUser";
import { validCountries } from "@/data/common";
import { CustomFormData, ExecAction, useForm } from "@/hooks/useForm";
import { FormActionResponse } from "@/types";
import { AuthType, RegisterRequest } from "@/types/types";
import { validateEmail, validateName, validateStringOnly } from "@/utils";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import { s } from "framer-motion/client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";

type ComponentProps = {
  changeAuthType: (val: AuthType) => void;
};

interface IRegisterForm {
  name: string;
  emailAddress: string;
  country: string;
  password: string;
  repeatPassword: string;
}

export default function RegisterForm({ changeAuthType }: ComponentProps) {
  const t = useTranslations("Auth");
  const locale = useLocale();
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);

  const registerForm: CustomFormData<IRegisterForm> = {
    submitText: t("registerButton"),
    fields: {
      name: {
        inputType: "input",
        key: "name",
        name: t("name"),
        required: true,
        validations: [{ exec: validateName, message: t("textValidation") }],
        inputOpts: {
          description: t("registerNameHint"),
        },
      },
      emailAddress: {
        inputType: "input",
        key: "emailAddress",
        name: t("email"),
        required: true,
        validations: [{ exec: validateEmail, message: t("emailValidation") }],
      },
      country: {
        inputType: "select",
        key: "country",
        name: t("country"),
        required: true,
        options: validCountries.map((country) => ({
          value: country.code,
          label: locale === "en" ? country.name.en : country.name.es,
        })),
      },
      password: {
        inputType: "input",
        type: isPasswordVisible ? "text" : "password",
        key: "password",
        name: t("password"),
        required: true,
        validations: [],
      },
      repeatPassword: {
        inputType: "input",
        type: isPasswordVisible ? "text" : "password",
        key: "repeatPassword",
        name: t("repeatPassword"),
        required: true,
        validations: [],
      },
    },
  };

  const registerFormAction = async (
    params: RegisterRequest,
  ): Promise<FormActionResponse<void>> => {
    const registerSuccessful = await registerUser(params);
    if (registerSuccessful) {
      return {
        isSuccess: true,
        data: undefined,
      };
    } else {
      return {
        isSuccess: false,
        data: undefined,
      };
    }
  };

  const formAction: ExecAction<void> = {
    trigger: (params: RegisterRequest) => registerFormAction(params),
    successMessage: t("successRegister"),
    failureMessage: t("failedRegister"),
  };

  const { FormComponent } = useForm(registerForm, formAction);

  return (
    <div className="flex flex-col gap-10">
      <div>
        <FormComponent />
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
