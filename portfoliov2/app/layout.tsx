import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import { ThemeProviderWrapper } from "./components/provider/ThemeProviderWrapper";

const expo2 = Chakra_Petch({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={expo2.className}>
        <div className="antialiased bg-base-300 h-screen">
          <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        </div>
      </body>
    </html>
  );
}
