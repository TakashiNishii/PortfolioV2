"use client";

import { ThemeChanger } from "./ThemeChanger";
import { CommandLineIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="navbar shadow-xl  bg-primary fixed flex gap-2 p-4 w-full justify-between z-50">
      <div className="flex flex-row gap-2 link-hover cursor-pointer text-white hover:text-accent">
        <CommandLineIcon className="w-8 h-8" />
        <h2 className=" text-xl font-semibold">Takashi Nishi</h2>
      </div>
      <div className="flex flex-row gap-4 text-lg text-white">
        <Link className="hover:text-accent" href="/#home">
          Home
        </Link>
        <ThemeChanger />
      </div>
    </div>
  );
};
