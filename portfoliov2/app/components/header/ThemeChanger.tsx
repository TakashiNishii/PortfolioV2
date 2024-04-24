"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="swap swap-rotate text-accent">
      {theme === "light" ? (
        <button
          type="button"
          className="swap-off"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon className="w-8 h-8" />
        </button>
      ) : (
        <button
          type="button"
          className="swap-off"
          onClick={() => setTheme("light")}
        >
          <SunIcon className="w-8 h-8" />
        </button>
      )}
    </div>
  );
};
