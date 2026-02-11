"use client";
import { PersonalInfo } from "./PersonalInfo";
import { MyResume } from "./MyResume";
import { MyEducation } from "./MyEducation";
import { Divider } from "../common/Divider";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateSplitText } from "../common/textAnimation";
import gsap from "gsap";

export const AboutMe = () => {
  const title = useRef<HTMLHeadingElement>(null);
  const subtitle = useRef<HTMLHeadingElement>(null);
  const personalInfoRef = useRef<HTMLDivElement>(null);
  const myResumeRef = useRef<HTMLDivElement>(null);
  const myEducationRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Aplicar animação no título
    if (title.current) {
      animateSplitText(title.current);
    }

    // Aplicar animação no subtítulo com um pequeno delay
    if (subtitle.current) {
      setTimeout(() => {
        animateSplitText(subtitle.current, {
          stagger: 0.02, // Um pouco mais rápido que o título
        });
      }, 200);
    }

    // Animar os cards com stagger
    const cards = [
      personalInfoRef.current,
      myResumeRef.current,
      myEducationRef.current,
    ].filter(Boolean) as HTMLDivElement[];

    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0, immediateRender: false },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          immediateRender: false,
          scrollTrigger: {
            trigger: personalInfoRef.current,
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
  }, [title, subtitle, personalInfoRef, myResumeRef, myEducationRef, cardsContainerRef]);

  return (
    <div className="flex flex-col w-full justify-center items-center gap-4 mt-16">
      <h2 className="text-4xl font-bold text-primary" ref={title}>About me</h2>
      <h3 className="text-lg text-base-200" ref={subtitle}>
        Get to know a little more about me.
      </h3>

      <PersonalInfo ref={personalInfoRef} />

      <div className="flex flex-col justify-center w-full md:flex-row  gap-4">
        <MyResume ref={myResumeRef} />

        <MyEducation ref={myEducationRef} />
      </div>

      <Divider id="skills" />
    </div>
  );
};
