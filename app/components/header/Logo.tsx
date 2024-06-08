import { CommandLineIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/?section=home"
      className="flex flex-row gap-2 link-hover cursor-pointer text-white  items-center hover:text-accent"
    >
      <CommandLineIcon className="w-8 h-8" />
      <h2 className=" text-xl font-semibold">Takashi Nishi</h2>
    </Link>
  );
};
