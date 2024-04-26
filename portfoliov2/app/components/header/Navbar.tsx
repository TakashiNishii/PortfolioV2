"use client";

import { ThemeChanger } from "./ThemeChanger";
import {
  Bars3Icon,
  CommandLineIcon,
  HomeIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Logo } from "./Logo";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { UserIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const refCheckbox = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [section, setSection] = useState("home");

  useEffect(() => {
    if (refCheckbox.current) {
      refCheckbox.current.checked = open;
    }
  }, [open]);

  useEffect(() => {
    if (searchParams.get("section")) {
      setSection(searchParams.get("section") ?? "home");
      router.push(`/#${searchParams.get("section")}`);
    }
  }, [searchParams]);

  return (
    <>
      <div className="navbar shadow-xl  bg-primary fixed md:flex gap-2 p-4 w-full justify-between z-50">
        <Logo />
        <div className="hidden flex-row gap-4 text-lg text-white md:flex">
          <Link className="hover:text-accent" href="/?section=home">
            Home
          </Link>
          <Link className="hover:text-accent" href="/?section=about">
            About
          </Link>
          <ThemeChanger />
        </div>
        <div className="swap swap-rotate md:hidden">
          <input type="checkbox" ref={refCheckbox} />
          <Bars3Icon
            onClick={() => setOpen(!open)}
            className={classNames("w-8 h-8 swap-off  text-white")}
          />
          <XMarkIcon
            onClick={() => setOpen(!open)}
            className={classNames("w-8 h-8 swap-on  text-white")}
          />
        </div>
      </div>

      {open && (
        <div className="btm-nav font-bold z-50  bg-secondary">
          <Link
            className={classNames(section === "home" && "active bg-primary")}
            href="/?section=home"
          >
            <HomeIcon className="h-5 w-5" />
            Home
          </Link>
          <Link
            className={classNames(section === "about" && "active bg-primary")}
            href="/?section=about"
          >
            <UserIcon className="h-5 w-5" />
            About
          </Link>
          <ThemeChanger />
        </div>
      )}
    </>
  );
};
