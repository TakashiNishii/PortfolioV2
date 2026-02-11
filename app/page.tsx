import { Suspense } from "react";
import { Navbar } from "./components/header/Navbar";
import BodyContent from "./components/contact/BodyContent";
import { Preloader } from "./components/common/Preloader";

export default function Home() {

  return (
    <main className="flex bg-base-100 min-h-screen flex-col items-center">
      <Preloader />
      <div id="navbar-wrapper" className="opacity-0">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
      </div>
      <div id="main-content" className="opacity-0">
        <BodyContent />
      </div>
    </main>
  );
}
