import { Suspense } from "react";
import { AboutMe } from "./components/about/AboutMe";
import { Navbar } from "./components/header/Navbar";
import { HomeSection } from "./components/home/HomeSection";
import { Skills } from "./components/skills/Skills";

export default function Home() {
  return (
    <main className="flex bg-base-100 min-h-screen flex-col items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>

      <HomeSection />
      <AboutMe />
      <Skills />
    </main>
  );
}
