"use client";
import { ThemeProvider } from "next-themes";

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
}

export const ThemeProviderWrapper = ({
  children,
}: ThemeProviderWrapperProps) => {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};
