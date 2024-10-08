"use client";
import { AuthType } from "@/types/types";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthComponent() {
  const [authType, setAuthType] = useState<AuthType>("login");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useTranslations("NavBar");
  return (
    <div>
      <div className="flex flex-row gap-2">
        <p
          onClick={() => {
            setAuthType("login");
            onOpen();
          }}
          className="self-center text-white hover:cursor-pointer"
        >
          {t("login")}
        </p>
        <Button
          className="dark text-white"
          color="primary"
          onClick={() => {
            setAuthType("register");
            onOpen();
          }}
        >
          {t("register")}
        </Button>
      </div>
      <Modal
        backdrop="blur"
        placement="center"
        isOpen={isOpen}
        onClose={onClose}
        radius="sm"
        className="dark text-white font-mulish"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center text-xl p-7">
                {authType === "login" ? t("headerLogin") : t("headerRegister")}
              </ModalHeader>
              <ModalBody>
                {authType === "login" ? (
                  <LoginForm changeAuthType={setAuthType} />
                ) : (
                  <RegisterForm changeAuthType={setAuthType} />
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
