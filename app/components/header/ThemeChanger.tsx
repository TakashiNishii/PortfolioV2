"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const iconRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!theme) setTheme("light");
  }, [setTheme, theme]);

  // Função para animar rotação
  const handleThemeChange = (newTheme: "light" | "dark") => {
    if (iconRef.current) {
      gsap.fromTo(
        iconRef.current,
        { rotate: 0 },
        {
          rotate: newTheme === "dark" ? 360 : -360,
          duration: 0.7,
          ease: "power2.inOut",
          onComplete: () => setTheme(newTheme),
        }
      );
    } else {
      setTheme(newTheme);
    }
  };

  return (
    <div className="swap swap-rotate text-accent">
      {theme === "light" ? (
        <button
          type="button"
          className="swap-off"
          ref={iconRef}
          onClick={() => handleThemeChange("dark")}
        >
          <MoonIcon className="w-8 h-8" />
        </button>
      ) : (
        <button
          type="button"
          className="swap-off"
          ref={iconRef}
          onClick={() => handleThemeChange("light")}
        >
          <SunIcon className="w-8 h-8" />
        </button>
      )}
    </div>
  );
};
