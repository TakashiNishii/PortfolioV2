"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../../../gsap";
import { useTheme } from "next-themes";
import classNames from "classnames";

export const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGPathElement>(null);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [bgColor, setBgColor] = useState("bg-black"); // Default para dark

  // Detectar tema antes de renderizar
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Verificar localStorage primeiro
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "light") {
        setBgColor("bg-white");
      } else if (storedTheme === "dark") {
        setBgColor("bg-black");
      } else {
        // Se for system, verificar preferência do sistema
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setBgColor(prefersDark ? "bg-black" : "bg-white");
      }
      setMounted(true);
    }
  }, []);

  // Atualizar quando o tema mudar (após montagem)
  useEffect(() => {
    if (mounted && theme) {
      const actualTheme = theme === "system" ? systemTheme : theme;
      setBgColor(actualTheme === "light" ? "bg-white" : "bg-black");
    }
  }, [theme, systemTheme, mounted]);

  useEffect(() => {
    if (typeof window === "undefined" || !mounted) return;

    const preloader = preloaderRef.current;
    const svg = svgRef.current;

    if (!preloader || !svg) return;

    // Verificar se gsap está disponível
    if (!gsap || typeof gsap.timeline !== "function") {
      console.error("GSAP timeline is not available");
      return;
    }

    // Pequeno delay para garantir que o tema está aplicado
    let tl: gsap.core.Timeline | null = null;
    const timer = setTimeout(() => {
      // Criar timeline do preloader
      tl = gsap.timeline();

      // Animação inicial do SVG (fade in e scale)
      tl.to(
        svg,
        {
          strokeDashoffset: 0,
          duration: 1,
        },
      )
        .to(
          svg,
          {
            fill: theme === "light" ? "#f0782e" : "#6C58C7",
            strokeDashoffset: 0,
            duration: 0.5
          }
        )
        // Fade out do SVG
        .to(
          svg,
          {
            opacity: 0,
            duration: 0.4,
          },
        )
        // Fade out do preloader completo
        .to(
          preloader,
          {
            opacity: 0,
            duration: 0.4,
          },
        )
        // Fade in do conteúdo principal
        .to(
          "#main-content",
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        )
        // Fade in do navbar separadamente
        .to(
          "#navbar-wrapper",
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.6"
        )
        // Remover do DOM após animação
        .set(preloader, {
          display: "none",
        });
    }, 50); // Pequeno delay para garantir que o tema está aplicado

    return () => {
      clearTimeout(timer);
      if (tl) {
        tl.kill();
      }
    };
  }, [mounted]);

  // Não renderizar até o tema estar detectado
  if (!mounted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black" />
    );
  }

  return (
    <div
      ref={preloaderRef}
      id="preloader"
      className={classNames("fixed inset-0 z-50 flex items-center justify-center", bgColor)}
    >
      <svg
        width="330"
        height="105"
        viewBox="0 0 110 35"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-auto max-w-[60vw] max-h-[30vh]"
      >
        <path
          ref={svgRef}
          fill={theme === "light" ? "#ff9932" : "#9082cf"}
          stroke={theme === "light" ? "#f85e00" : "#6C58C7"}
          strokeDasharray={120}
          strokeDashoffset={120}
          d="M6.09004 24.63L3.91752e-05 18L6.09004 11.37H12.54L6.42004 18L12.54 24.63H6.09004ZM34.7335 7.44L27.4435 21.54V28.5H22.3135V21.54L15.0235 7.44H20.8435L24.9235 16.26L28.9735 7.44H34.7335ZM51.9504 7.44V11.55H46.3704V28.5H41.2404V11.55H35.6604V7.44H51.9504ZM73.365 28.5H68.235L59.655 15.51V28.5H54.525V7.44H59.655L68.235 20.49V7.44H73.365V28.5ZM94.8711 -1.43051e-06L86.8311 34.11H81.8811L89.9211 -1.43051e-06H94.8711ZM97.0648 11.37H103.515L109.605 18L103.515 24.63H97.0648L103.185 18L97.0648 11.37Z"
        />
      </svg>
    </div>
  );
};
