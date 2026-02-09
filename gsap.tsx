// SSR doesn't work with ES Modules so we need to import the UMD files instead
import { Draggable } from "gsap/dist/Draggable";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

let scrollSmootherInstance: ScrollSmoother | null = null;

// configure/register once we're running in the browser
if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable, TextPlugin, ScrollSmoother, ScrollTrigger);

  gsap.defaults({
    duration: 2
  });

  gsap.registerEffect({
    name: "fadeIn",
    effect(targets: gsap.TweenTarget) {
      return gsap.from(targets, { opacity: 0, x: 200 });
    }
  });
}

// Function to initialize ScrollSmoother
export function initScrollSmoother() {
  if (typeof window === "undefined") return null;

  // Check if already initialized
  if (scrollSmootherInstance) {
    return scrollSmootherInstance;
  }

  // Check if elements exist
  const wrapper = document.querySelector("#smooth-wrapper");
  const content = document.querySelector("#smooth-content");

  if (!wrapper || !content) {
    console.warn("ScrollSmoother: wrapper or content element not found");
    return null;
  }

  try {
    scrollSmootherInstance = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });
    return scrollSmootherInstance;
  } catch (error) {
    console.error("Error creating ScrollSmoother:", error);
    return null;
  }
}

// Preloader
export function showPreloader() {
  if (typeof window === "undefined") return;

  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.display = "block";
  }
}

// export anything that you might need a reference to
export * from "gsap/dist/gsap";
export * from "gsap/dist/Draggable";
export * from "gsap/dist/TextPlugin";
export * from "gsap/dist/ScrollSmoother";
export * from "gsap/dist/ScrollTrigger";