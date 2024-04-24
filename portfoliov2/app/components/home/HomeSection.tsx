"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

export const HomeSection = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div
        id="home"
        className="min-h-[calc(100vh-64px)] mt-16 flex flex-col w-full md:-mt-16 justify-center gap-4 md:flex-row md:justify-between items-center"
      >
        {theme && (
          <div className="w-full flex flex-col items-center justify-center md:w-1/2 md:flex-row">
            {theme === "light" ? (
              <div className="mask mask-squircle flex-1 max-w-sm max-h-96">
                <Image
                  src="/images/Eu-light.png"
                  alt="Ygor Takashi Nishi"
                  width={1000}
                  height={1000}
                />
              </div>
            ) : (
              <div className="mask mask-squircle flex-1 max-w-sm max-h-96">
                <Image
                  src="/images/Eu-dark.png"
                  alt="Ygor Takashi Nishi"
                  width={1000}
                  height={1000}
                />
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col gap-1 w-full text-center items-center md:text-start md:items-start md:w-1/2 md:gap-4">
          <h2 className="text-2xl font-semibold text-primary">{`Hello, I'm`}</h2>
          <h1 className="text-4xl font-bold text-primary">
            Ygor Takashi Nishi
          </h1>
          <div className="flex flex-col md:flex-row">
            <h2 className="text-2xl text-primary">Fullstack Developer</h2>
            <div className="divider divider-vertical md:divider-horizontal my-0" />
            <h2 className="text-2xl text-primary">Mobile Developer</h2>
          </div>
          <h3 className="text-lg text-base-200">
            code lover 👨‍💻, crossfit athlete 🏋️‍♂️ and Corinthians fan ⚽
          </h3>
          <button className="btn btn-wide btn-primary">Contact me</button>
        </div>
      </div>
      <div className="divider divider-secondary text-primary  md:-mt-16">
        <span>
          🖱️ Scroll Down <kbd className="kbd kbd-sm bg-secondary">▼</kbd>
        </span>
      </div>
    </>
  );
};
