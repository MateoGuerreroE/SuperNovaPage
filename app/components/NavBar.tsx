import { Navbar, NavbarBrand } from "@nextui-org/react";
import React from "react";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <Navbar>
      <NavbarBrand>Sample</NavbarBrand>
    </Navbar>
  );
}
