import { Divider } from "../common/Divider";
import { ProjectList } from "./ProjectList";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateSplitText } from "../common/textAnimation";
import gsap from "gsap";
import { useLanguage } from "../provider/LanguageProviderWrapper";

export const MyProjects = () => {
  const title = useRef<HTMLHeadingElement>(null);
  const subtitle = useRef<HTMLHeadingElement>(null);
  const projectListRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

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
        }
      );
    }
  }, [title, subtitle, projectListRef]);

  return (
    <div id="projects" className="flex flex-col w-full justify-center items-center gap-4 mt-16">
      <h2 className="text-4xl font-bold text-primary" ref={title}>
        {t("projects.title")}
      </h2>
      <h3 className="text-lg text-base-200 text-center" ref={subtitle}>
        {t("projects.subtitle")}
      </h3>

      <div ref={projectListRef}>
        <ProjectList />
      </div>
      <Divider id="contact" />
    </div>
  );
};
