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
      <div id="preloader">
        <svg width="110" height="35" viewBox="0 0 110 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.09004 24.63L3.91752e-05 18L6.09004 11.37H12.54L6.42004 18L12.54 24.63H6.09004ZM34.7335 7.44L27.4435 21.54V28.5H22.3135V21.54L15.0235 7.44H20.8435L24.9235 16.26L28.9735 7.44H34.7335ZM51.9504 7.44V11.55H46.3704V28.5H41.2404V11.55H35.6604V7.44H51.9504ZM73.365 28.5H68.235L59.655 15.51V28.5H54.525V7.44H59.655L68.235 20.49V7.44H73.365V28.5ZM94.8711 -1.43051e-06L86.8311 34.11H81.8811L89.9211 -1.43051e-06H94.8711ZM97.0648 11.37H103.515L109.605 18L103.515 24.63H97.0648L103.185 18L97.0648 11.37Z" fill="white" />
        </svg>
      </div>
    </main>
  );
}
