import { Suspense } from "react";
import { Navbar } from "./components/header/Navbar";
import BodyContent from "./components/contact/BodyContent";

export default function Home() {

  return (
    <main className="flex bg-base-100 min-h-screen flex-col items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <BodyContent />
    </main>
  );
}
