import SubmitButton from "@/components/SubmitButton";
import { validCountries } from "@/data/common";
import { FormActionResponse } from "@/types";
import { Input, popover, Select, SelectItem } from "@heroui/react";
import { useState } from "react";
import Swal from "sweetalert2";

type ValidationFunction = (value: any) => boolean;

type FormValidations = {
  exec: ValidationFunction;
  message: string;
};

type FormFieldMap<T> = {
  [K in keyof T]: FormInput<T>;
};

interface IBaseFieldInput<T> {
  key: keyof T & string;
  name: string;
  required: boolean;
}

type FormInput<T> = FormInputField<T> | FormSelectField<T>;

export interface FormInputField<T> extends IBaseFieldInput<T> {
  inputType: "input";
  validations: FormValidations[];
  type?: "text" | "email" | "password" | "number";
  inputOpts?: {
    startContent?: any;
    endContent?: any;
    labelPlacement?: "outside" | "outside-left" | "inside";
    radius?: "sm" | "md" | "lg" | "xl" | "full";
    description?: string;
  };
}

interface SelectOpt {
  value: string;
  label: string;
}

export interface FormSelectField<T> extends IBaseFieldInput<T> {
  inputType: "select";
  options: SelectOpt[];
}

export interface CustomFormData<T> {
  fields: FormFieldMap<T>;
  submitText: string;
}

export interface ExecAction<R> {
  trigger: (...params: any[]) => Promise<FormActionResponse<R>>;
  successMessage: string;
  failureMessage: string;
}

export function useForm<T, R>(
  formData: CustomFormData<T>,
  execute: ExecAction<R>,
): {
  FormComponent: () => JSX.Element;
} {
  const initialState = Object.keys(formData.fields).reduce(
    (acc, key) => {
      acc[key as keyof T] = "";
      return acc;
    },
    {} as Record<keyof T, string>,
  ) as T;

  function FormComponent(): JSX.Element {
    const [form, setForm] = useState<T>(initialState);
    const [errors, setErrors] = useState<T>(initialState);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [actionError, setActionError] = useState<string>("");

    const invalidFormValidation = (): boolean => {
      for (const key in form) {
        if (form[key] === "") return true;
      }
      for (const key in errors) {
        if (errors[key] !== "") return true;
      }
      return false;
    };

    const validateErrors = (
      val: string,
      validations: FormValidations[],
    ): string => {
      for (const validation of validations) {
        if (!validation.exec(val)) {
          return validation.message;
        }
      }
      return "";
    };

    const validateField = (
      value: string,
      key: keyof T,
      validations: FormValidations[],
    ) => {
      setErrors((prev) => ({
        ...prev,
        [key]: validateErrors(value, validations),
      }));
      setForm((prev) => ({ ...prev, [key]: value }));
    };

    const formAction = async () => {
      setLoading(true);
      const response = await execute.trigger(form);
      setLoading(false);
      if (response.isSuccess) {
        Swal.fire({
          icon: "success",
          title: execute.successMessage,
          color: "white",
          timer: 2000,
          background: "#18181B",
          showConfirmButton: false,
          backdrop: "rgba(0,0,0,0.3)",
          customClass: {
            container: "alert-container",
            popup: "alert-popup",
            confirmButton: "alert-button",
          },
        });
      } else {
        setActionError(execute.failureMessage);
      }
    };

    return (
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          formAction();
        }}
      >
        {Object.values<FormInput<T>>(formData.fields).map((field) => {
          switch (field.inputType) {
            case "input":
              return (
                <Input
                  type={field.type || "text"}
                  key={field.key}
                  label={field.name}
                  labelPlacement={field.inputOpts?.labelPlacement || "inside"}
                  value={form[field.key] as string}
                  description={field.inputOpts?.description}
                  onValueChange={(e) =>
                    validateField(e, field.key, field.validations)
                  }
                  endContent={field.inputOpts?.endContent}
                  required={field.required}
                  isInvalid={errors[field.key] !== ""}
                  errorMessage={errors[field.key] as string}
                />
              );
            case "select":
              return (
                <Select
                  key={field.key}
                  label={field.name}
                  classNames={{ popoverContent: "dark" }}
                  onChange={(e) =>
                    setForm({ ...form, [field.key]: e.target.value })
                  }
                >
                  {field.options.map((opt) => (
                    <SelectItem key={opt.value} className="text-white">
                      {opt.label}
                    </SelectItem>
                  ))}
                </Select>
              );
            default:
              return null;
          }
        })}
        <SubmitButton
          loading={isLoading}
          text={formData.submitText}
          disabled={invalidFormValidation()}
        />
        {actionError && (
          <p
            style={{ color: "red" }}
            className="text-center font-mulish text-sm"
          >
            {actionError}
          </p>
        )}
      </form>
    );
  }

  return { FormComponent };
}
