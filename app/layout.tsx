import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import { ThemeProviderWrapper } from "./components/provider/ThemeProviderWrapper";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const expo2 = Chakra_Petch({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Ygor Takashi Nishi - Portfolio",
  description: "Know more about me and my projects!",
  icons: {
    icon: "/images/Logo-light.png",
  },
  openGraph: {
    images: ["https://avatars.githubusercontent.com/u/49199986?v=4"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://avatars.githubusercontent.com/u/49199986?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true}>
      <body className={expo2.className}>
        <div className="antialiased bg-base-300 h-screen">
          <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
