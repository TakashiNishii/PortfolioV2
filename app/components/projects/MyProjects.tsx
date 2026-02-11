import { Divider } from "../common/Divider";
import { ProjectList } from "./ProjectList";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateSplitText } from "../common/textAnimation";
import gsap from "gsap";

export const MyProjects = () => {
  const title = useRef<HTMLHeadingElement>(null);
  const subtitle = useRef<HTMLHeadingElement>(null);
  const projectListRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (title.current) {
      animateSplitText(title.current);
    }
    if (subtitle.current) {
      setTimeout(() => {
        animateSplitText(subtitle.current, { stagger: 0.02 });
      }, 200);
    }
    if (projectListRef.current) {
      gsap.fromTo(
        projectListRef.current,
        { y: 50, opacity: 0, immediateRender: false },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: projectListRef.current,
            start: "top 70%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
            scroller: "#smooth-wrapper",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }
  }, [title, subtitle, projectListRef]);

  return (
    <div className="flex flex-col w-full justify-center items-center gap-4 mt-16">
      <h2 className="text-4xl font-bold text-primary" ref={title}>Portfolio</h2>
      <h3 className="text-lg text-base-200 text-center" ref={subtitle}>
        My recent projects and contributions.
      </h3>

      <div ref={projectListRef}>
        <ProjectList />
      </div>
      <Divider id="contact" />
    </div>
  );
};
