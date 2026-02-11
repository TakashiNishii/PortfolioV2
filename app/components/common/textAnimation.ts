import gsap from "gsap";

interface TextAnimationOptions {
  y?: number;
  opacity?: number;
  duration?: number;
  ease?: string;
  stagger?: number;
  start?: string;
  end?: string;
  scroller?: string;
}

/**
 * Aplica animação de texto caractere por caractere usando GSAP
 * @param element - Elemento HTML que contém o texto
 * @param options - Opções de animação
 * @returns Função de cleanup para restaurar o texto original
 */
export function animateSplitText(
  element: HTMLElement | null,
  options: TextAnimationOptions = {}
): (() => void) | null {
  if (!element) return null;

  const {
    y = 20,
    opacity = 0,
    duration = 0.6,
    ease = "power3.out",
    stagger = 0.03,
    start = "top 80%",
    end = "bottom 60%",
    scroller = "#smooth-wrapper",
  } = options;

  // Salvar texto original
  const original = element.textContent || "";
  const trimmed = original.trim();
  element.dataset.originalText = original;

  // Dividir texto em caracteres
  element.innerHTML = trimmed
    .split("")
    .map((char) =>
      char === " "
        ? `<span class="split-char">&nbsp;</span>`
        : `<span class="split-char">${char}</span>`
    )
    .join("");

  const chars = element.querySelectorAll(".split-char");

  // Aplicar animação
  gsap.fromTo(
    chars,
    { y, opacity },
    {
      y: 0,
      opacity: 1,
      duration,
      ease,
      stagger,
      scrollTrigger: {
        trigger: element,
        start,
        end,
        toggleActions: "play none none reverse",
        scroller,
      },
    }
  );

  // Retornar função de cleanup
  return () => {
    if (element.dataset.originalText) {
      element.innerHTML = element.dataset.originalText;
      delete element.dataset.originalText;
    }
  };
}
