"use client";
import HomeMain from "@/sections/home/main";
import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <main className="bg-zinc-900 flex flex-col">
      <HomeMain />
      <section className="h-[100vh] w-full"></section>
    </main>
  );
}
