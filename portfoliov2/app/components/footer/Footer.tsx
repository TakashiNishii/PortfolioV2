"use client";
import Link from "next/link";
import { Logo } from "../header/Logo";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { InstagramIcon } from "../icons/InstagramIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { WhatsappIcon } from "../icons/WhatsappIcon";

export const Footer = () => {
  const { theme, setTheme } = useTheme();
  const [themeProfile, setThemeProfile] = useState(theme);

  useEffect(() => {
    setThemeProfile(theme);
  }, [theme]);
  return (
    <footer className="footer items-center p-4 bg-primary  mt-16">
      <aside className="items-center text-center justify-center flex flex-col w-full md:flex-row md:justify-start ">
        <Logo />
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className="flex flex-row justify-center w-full gap-4 md:justify-end">
        <Link href={"https://www.instagram.com/ytakashin/"} target="_blank">
          <InstagramIcon
            className="w-8 h-8 cursor-pointer hover:opacity-50"
            fill={themeProfile === "light" ? "#000000" : "#ffffff"}
          />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/takashi-nishi/"}
          target="_blank"
        >
          <LinkedinIcon
            className="w-8 h-8 cursor-pointer hover:opacity-50"
            fill={themeProfile === "light" ? "#000000" : "#ffffff"}
          />
        </Link>
        <Link href={"https://github.com/TakashiNishii"} target="_blank">
          <GithubIcon
            className="w-8 h-8 cursor-pointer hover:opacity-50"
            fill={themeProfile === "light" ? "#000000" : "#ffffff"}
          />
        </Link>

        <Link
          href={"https://api.whatsapp.com/send?phone=5518996682139"}
          target="_blank"
        >
          <WhatsappIcon
            className="w-8 h-8 cursor-pointer hover:opacity-50"
            fill={themeProfile === "light" ? "#000000" : "#ffffff"}
          />
        </Link>
      </nav>
    </footer>
  );
};
