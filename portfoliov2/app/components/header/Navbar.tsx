"use client";

import { ThemeChanger } from "./ThemeChanger";
import {
  Bars3Icon,
  HomeIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Logo } from "./Logo";
import { Suspense, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { useRouter, useSearchParams } from "next/navigation";
import { UserIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { LanguageSwitch } from "./LanguageIndex";
import { useTranslation } from "@/app/i18n/client";

interface NavbarProps {
  params: { lng: string };
}

export const Navbar = ({ params: { lng } }: NavbarProps) => {
  const { t } = useTranslation(lng, "common");
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
  }, [router, searchParams]);

  return (
    <>
      <div className="navbar shadow-xl  bg-primary fixed md:flex gap-2 p-4 w-full justify-between z-50">
        <Logo />
        <LanguageSwitch lng={lng} />
        <div className="hidden flex-row gap-4 text-lg text-white md:flex">
          <Link className="hover:text-accent" href={`/${lng}/?section=home`}>
            {t("Home")}
          </Link>
          <Link className="hover:text-accent" href={`/${lng}/?section=about`}>
            {t("About")}
          </Link>
          <Link className="hover:text-accent" href={`/${lng}/?section=skills`}>
            Skills
          </Link>
          <Link
            className="hover:text-accent"
            href={`/${lng}/?section=projects`}
          >
            Projects
          </Link>
          <Link className="hover:text-accent" href={`/${lng}/?section=contact`}>
            Contact
          </Link>
          <ThemeChanger />
        </div>
        <div className="flex flex-row gap-4 md:hidden">
          <ThemeChanger />
          <div className="swap swap-rotate ">
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
      </div>

      {open && (
        <div className="btm-nav font-bold z-50  bg-secondary md:hidden">
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
          <Link
            className={classNames(section === "skills" && "active bg-primary")}
            href="/?section=skills"
          >
            <DocumentTextIcon className="h-5 w-5" />
            Skills
          </Link>
          <Link
            className={classNames(
              section === "projects" && "active bg-primary"
            )}
            href="/?section=projects"
          >
            <PhotoIcon className="h-5 w-5" />
            Projects
          </Link>
          <Link
            className={classNames(section === "contact" && "active bg-primary")}
            href="/?section=contact"
          >
            <PaperAirplaneIcon className="h-5 w-5" />
            Contact
          </Link>
        </div>
      )}
    </>
  );
};
