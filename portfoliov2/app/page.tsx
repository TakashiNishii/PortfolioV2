import { Navbar } from "./components/header/Navbar";
import { HomeSection } from "./components/home/HomeSection";

export default function Home() {
  return (
    <main className="flex bg-base-100 min-h-screen flex-col items-center">
      <Navbar />
      <HomeSection />
    </main>
  );
}
