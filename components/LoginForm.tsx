import { AuthType, LoginRequest } from "@/types/types";
import { useTranslations } from "next-intl";
import { CustomFormData, ExecAction, useForm } from "@/hooks/useForm";
import { validateEmail } from "@/utils";
import { useAuthentication } from "@/hooks/useAuthentication";
import { useGeneralStore } from "@/stores/generalStore";
import { FormActionResponse } from "@/types";

type ComponentProps = {
  changeAuthType: (val: AuthType) => void;
  closeModal: () => void;
};

interface ILoginForm {
  emailAddress: string;
  password: string;
}

export default function LoginForm({
  changeAuthType,
  closeModal,
}: ComponentProps) {
  const t = useTranslations("Auth");
  const { loginUser } = useAuthentication();
  const { auth } = useGeneralStore();

  const LoginFormData: CustomFormData<ILoginForm> = {
    submitText: t("logButton"),
    fields: {
      emailAddress: {
        inputType: "input",
        key: "emailAddress",
        name: t("email"),
        required: true,
        validations: [
          {
            exec: validateEmail,
            message: t("emailValidation"),
          },
        ],
      },
      password: {
        inputType: "input",
        key: "password",
        name: t("password"),
        required: true,
        validations: [],
      },
    },
  };

  const loginFormAction = async (
    params: LoginRequest,
  ): Promise<FormActionResponse<void>> => {
    const loginSuccessful = await loginUser(params);
    if (loginSuccessful) {
      closeModal();
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
    trigger: (params: LoginRequest) => loginFormAction(params),
    successMessage: t("successLogin"),
    failureMessage: t("failedLogin"),
  };

  const { FormComponent } = useForm(LoginFormData, formAction);
  return (
    <div className="flex flex-col gap-10">
      <FormComponent />
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
