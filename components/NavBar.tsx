"use client";
import useUserLocale from "@/hooks/useUserLocale";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState, useTransition } from "react";
import AuthComponent from "./AuthComponent";
import { menuItems } from "@/data/menu";

type Props = {};

export default function NavBar({}: Props) {
  const [locale, changeLocale] = useUserLocale();
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const selection = useMemo(() => new Set([locale]), [locale]);
  const t = useTranslations("NavBar");

  const handleChange = (value: Set<Locale>) => {
    startTransition(() => setUserLocale([...value][0]));
    changeLocale([...value][0]);
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setMenuOpen}
      className="font-mulish bg-black"
      maxWidth="2xl"
      classNames={{
        brand: "grow-0 basis-auto lg:grow lg:basis-0",
        toggleIcon: "h-6 text-white",
        menu: "w-[70%]",
      }}
    >
      <NavbarBrand className="flex flex-row gap-3">
        <NavbarMenuToggle className="block md:hidden"></NavbarMenuToggle>
        <Link href={"/home"} className="flex flex-row gap-3">
          <Image
            src="/logoIcon.png"
            alt="logo"
            width={500}
            height={500}
            className="w-7"
          />
          <p className="font-bold text-lg text-white hidden lg:block">
            Supernova Academy
          </p>
        </Link>
      </NavbarBrand>
      <NavbarContent
        className="hidden md:flex gap-6 text-white"
        justify="center"
      >
        {menuItems.map((item) => (
          <NavbarItem key={item.key}>
            <Link color="foreground" href={`/${item.redirect}`}>
              {t(item.translateKey)}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <AuthComponent />
        </NavbarItem>
        <NavbarItem>
          <Dropdown radius="sm" className="dark text-white font-mulish">
            <DropdownTrigger className="hover:cursor-pointer">
              <Image
                src="/icons/world.svg"
                alt="translate"
                width={500}
                height={500}
                className="w-6"
              />
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selection}
              onSelectionChange={handleChange as any}
            >
              <DropdownItem key="en" textValue="en">
                <p>EN</p>
              </DropdownItem>
              <DropdownItem key="es" textValue="es">
                <p>ES</p>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="dark p-10 font-mulish text-white/90">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.key}>
            <Link
              color="foreground"
              href={`/${item.redirect}`}
              onClick={() => setMenuOpen(false)}
            >
              {t(item.translateKey)}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
