import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "../globals.css";
import { ThemeProviderWrapper } from "../components/provider/ThemeProviderWrapper";
import { dir } from "i18next";

import { languages } from "../i18n/settings";

const expo2 = Chakra_Petch({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Ygor Takashi Nishi - Portfolio",
  description: "Know more about me and my projects!",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  return (
    <html suppressHydrationWarning={true} lang={lng} dir={dir(lng)}>
      <body className={expo2.className}>
        <div className="antialiased bg-base-300 h-screen">
          <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        </div>
      </body>
    </html>
  );
}
