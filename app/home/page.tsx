import HomeMain from "@/sections/home/main";
import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <main className="bg-zinc-700 flex flex-col">
      <HomeMain />
    </main>
  );
}
