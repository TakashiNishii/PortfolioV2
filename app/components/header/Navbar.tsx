"use client";

import { ThemeChanger } from "./ThemeChanger";
import {
  Bars3Icon,
  HomeIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Logo } from "./Logo";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { UserIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { initScrollSmoother } from "../../../gsap";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const refCheckbox = useRef<HTMLInputElement>(null);
  const [section, setSection] = useState("home");

  useEffect(() => {
    if (refCheckbox.current) {
      refCheckbox.current.checked = open;
    }
  }, [open]);

  const scrollToSection = (target: string) => {
    setSection(target);

    const smoother = initScrollSmoother();
    const selector = target === "home" ? "#home" : `#${target}`;

    if (smoother) {
      smoother.scrollTo(selector, true);
    } else if (typeof window !== "undefined") {
      const el = document.querySelector(selector);
      if (el) {
        (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    setOpen(false);
  };

  return (
    <>
      <div className="navbar shadow-xl bg-primary fixed top-0 left-0 right-0 md:flex gap-2 p-4 w-full justify-between z-50">
        <Logo />
        <div className="hidden flex-row gap-4 text-lg text-white md:flex">
          <button className="hover:text-accent" onClick={() => scrollToSection("home")}>
            Home
          </button>
          <button className="hover:text-accent" onClick={() => scrollToSection("about")}>
            About
          </button>
          <button className="hover:text-accent" onClick={() => scrollToSection("skills")}>
            Skills
          </button>
          <button className="hover:text-accent" onClick={() => scrollToSection("projects")}>
            Projects
          </button>
          <button className="hover:text-accent" onClick={() => scrollToSection("contact")}>
            Contact
          </button>
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
          <button
            className={classNames(section === "home" && "active bg-primary")}
            onClick={() => scrollToSection("home")}
          >
            <HomeIcon className="h-5 w-5" />
            Home
          </button>
          <button
            className={classNames(section === "about" && "active bg-primary")}
            onClick={() => scrollToSection("about")}
          >
            <UserIcon className="h-5 w-5" />
            About
          </button>
          <button
            className={classNames(section === "skills" && "active bg-primary")}
            onClick={() => scrollToSection("skills")}
          >
            <DocumentTextIcon className="h-5 w-5" />
            Skills
          </button>
          <button
            className={classNames(
              section === "projects" && "active bg-primary"
            )}
            onClick={() => scrollToSection("projects")}
          >
            <PhotoIcon className="h-5 w-5" />
            Projects
          </button>
          <button
            className={classNames(section === "contact" && "active bg-primary")}
            onClick={() => scrollToSection("contact")}
          >
            <PaperAirplaneIcon className="h-5 w-5" />
            Contact
          </button>
        </div>
      )}
    </>
  );
};
