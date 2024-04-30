import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import { ThemeProviderWrapper } from "./components/provider/ThemeProviderWrapper";

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
    images: [
      {
        url: "/images/Logo-light.png",
        width: 800,
        height: 600,
        alt: "Ygor Takashi Nishi - Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true}>
      <head></head>
      <body className={expo2.className}>
        <div className="antialiased bg-base-300 h-screen">
          <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        </div>
      </body>
    </html>
  );
}
