"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Divider } from "../common/Divider";
import { useEffect, useRef, useState } from "react";
import { InstagramIcon } from "../icons/InstagramIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { WhatsappIcon } from "../icons/WhatsappIcon";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { animateSplitText } from '../common/textAnimation';

export const HomeSection = () => {
  const { theme } = useTheme();
  const [themeProfile, setThemeProfile] = useState(theme);
  const image = useRef<HTMLDivElement>(null);
  const socialIcons = useRef<HTMLDivElement>(null);
  const infoText = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setThemeProfile(theme);
  }, [theme]);

  useGSAP(() => {
    if (infoText.current) {
      animateSplitText(infoText.current);
    }

    if (socialIcons.current) {
      gsap.fromTo(
        socialIcons.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: socialIcons.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
            scroller: "#smooth-wrapper",
          },
        }
      );
    }
    if (image.current) {
      gsap.fromTo(
        image.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
            scroller: "#smooth-wrapper",
          },
        }
      );
    }
    return () => { };
  }, [image, infoText, socialIcons]);
  return (
    <>
      <div
        id="home"
        className="min-h-[calc(80vh)] mt-20 flex flex-col w-full gap-8 justify-center md:gap-4 md:flex-row md:justify-between items-center"
      >
        <div className="w-full flex flex-col items-center justify-center h-64 md:h-80 md:w-1/2 md:flex-row-reverse">
          <div ref={image} className="mask mask-squircle flex-1 max-w-sm max-h-64 md:max-h-80">
            {themeProfile && (
              <Image
                src={
                  themeProfile === "light"
                    ? "/images/Eu-light.png"
                    : "/images/Eu-dark.png"
                }
                alt="Ygor Takashi Nishi"
                width={1000}
                height={1000}
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>
          <div className="flex flex-row gap-4 mt-4 md:mt-0 md:flex-col" ref={socialIcons}>
            <Link href={"https://www.instagram.com/ytakashin/"} target="_blank">
              <InstagramIcon
                className="w-8 h-8 cursor-pointer hover:opacity-50"
                fill={themeProfile === "light" ? "#000000" : "#ffffff"}
              />
            </Link>

            <Link
              href={"https://www.linkedin.com/in/takashi-nishi/"}
              target="_blank"
            >
              <LinkedinIcon
                className="w-8 h-8 cursor-pointer hover:opacity-50"
                fill={themeProfile === "light" ? "#000000" : "#ffffff"}
              />
            </Link>

            <Link href={"https://github.com/TakashiNishii"} target="_blank">
              <GithubIcon
                className="w-8 h-8 cursor-pointer hover:opacity-50"
                fill={themeProfile === "light" ? "#000000" : "#ffffff"}
              />
            </Link>

            <Link
              href={"https://api.whatsapp.com/send?phone=5518996682139"}
              target="_blank"
            >
              <WhatsappIcon
                className="w-8 h-8 cursor-pointer hover:opacity-50"
                fill={themeProfile === "light" ? "#000000" : "#ffffff"}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-1 w-full text-center items-center md:text-start md:items-start md:w-1/2 md:gap-4">
          <h2 className="text-2xl font-semibold text-primary">{`Hello, I'm`}</h2>
          <h1 className="text-4xl font-bold text-primary" ref={infoText} id="splitText">
            Ygor Takashi Nishi
          </h1>
          <div className="flex flex-col lg:flex-row">
            <h2 className="text-2xl text-primary">Fullstack Developer</h2>
            <div className="divider divider-vertical lg:divider-horizontal my-0" />
            <h2 className="text-2xl text-primary">Mobile Developer</h2>
          </div>
          <Link href={"/?section=contact"} className="btn btn-wide btn-primary">
            Contact me
          </Link>
        </div>
      </div>
      <Divider
        id="about"
        classNamesExtra="divider-secondary text-primary "
      >
        <span>
          🖱️ Scroll Down <kbd className="kbd kbd-sm bg-secondary">▼</kbd>
        </span>
      </Divider>
    </>
  );
};
