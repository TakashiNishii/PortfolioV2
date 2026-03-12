"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "en" | "pt";

type TranslationKey =
  | "navbar.home"
  | "navbar.about"
  | "navbar.skills"
  | "navbar.projects"
  | "navbar.contact"
  | "navbar.languageToggle"
  | "home.greeting"
  | "home.fullstack"
  | "home.mobile"
  | "home.contactButton"
  | "home.scrollDown"
  | "about.title"
  | "about.subtitle"
  | "about.personalInfoTitle"
  | "about.personalInfoText"
  | "about.personalInfoMainSkills"
  | "about.personalInfoSeeMore"
  | "about.resumeTitle"
  | "about.resumeParagraph1"
  | "about.resumeParagraph2"
  | "about.resumeParagraph3"
  | "about.resumeDownload"
  | "about.educationTitle"
  | "about.educationParagraph1"
  | "about.educationParagraph2"
  | "about.educationParagraph3"
  | "skills.title"
  | "skills.subtitle"
  | "skills.filterBy"
  | "skills.filterAll"
  | "skills.filterFrontend"
  | "skills.filterBackend"
  | "skills.filterMobile"
  | "skills.filterDatabase"
  | "skills.filterCloud"
  | "skills.filterOthers"
  | "skills.learningMore"
  | "projects.title"
  | "projects.subtitle"
  | "projects.viewProject"
  | "contact.title"
  | "contact.subtitle"
  | "contact.emailTitle"
  | "contact.emailCta"
  | "contact.whatsappTitle"
  | "contact.whatsappCta"
  | "footer.copyright";

type Messages = Record<Language, Record<TranslationKey, string>>;

const messages: Messages = {
  en: {
    "navbar.home": "Home",
    "navbar.about": "About",
    "navbar.skills": "Skills",
    "navbar.projects": "Projects",
    "navbar.contact": "Contact",
    "navbar.languageToggle": "EN / PT",
    "home.greeting": "Hello, I'm",
    "home.fullstack": "Fullstack Developer",
    "home.mobile": "Mobile Developer",
    "home.contactButton": "Contact me",
    "home.scrollDown": "🖱️ Scroll Down",
    "about.title": "About me",
    "about.subtitle": "Get to know a little more about me.",
    "about.personalInfoTitle": "Personal info",
    "about.personalInfoText":
      "My name is Ygor Takashi Nishi and I'm 25 years old. Actually I'm a Frontend Developer, with a passion for solve problems creatively and intelligently. I have 5 years of experience in the area, and I'm always looking for new challenges and opportunities to grow.",
    "about.personalInfoMainSkills": "My principal skills are:",
    "about.personalInfoSeeMore": "See more",
    "about.resumeTitle": "My Resume",
    "about.resumeParagraph1":
      "As a developer with a few years of experience, I have worked in several projects that have helped me to improve my skills and knowledge. And I continue to be passionate about learning new technologies and methodologies.",
    "about.resumeParagraph2":
      "I have worked in frontend, backend and mobile projects, and in all projects I use to work with agile methodologies, like Scrum and Kanban.",
    "about.resumeParagraph3":
      "If you want to know more about my professional life, you can check my resume.",
    "about.resumeDownload": "Download CV",
    "about.educationTitle": "My Education",
    "about.educationParagraph1":
      "I have a strong academic background in computer science, with a Computer Technician degree at",
    "about.educationParagraph2":
      "and a Bachelor's degree in Computer Science at",
    "about.educationParagraph3":
      "During my academic life, I gained experience in robotics, software development, and research. I have worked in several projects, and I have published some papers in conferences and journals.",
    "skills.title": "My Skills",
    "skills.subtitle": "Here are all the technologies I use to make my projects.",
    "skills.filterBy": "Filter by:",
    "skills.filterAll": "All",
    "skills.filterFrontend": "Frontend",
    "skills.filterBackend": "Backend",
    "skills.filterMobile": "Mobile",
    "skills.filterDatabase": "Database",
    "skills.filterCloud": "Cloud",
    "skills.filterOthers": "Others",
    "skills.learningMore":
      "And I still learning more technologies to improve my skills. 🚀",
    "projects.title": "Portfolio",
    "projects.subtitle": "My recent projects and contributions.",
    "projects.viewProject": "View project",
    "contact.title": "Contacts",
    "contact.subtitle":
      "If you want to talk to me, here are some ways to contact me.",
    "contact.emailTitle": "Email",
    "contact.emailCta": "Send an email",
    "contact.whatsappTitle": "Whatsapp",
    "contact.whatsappCta": "Send a message",
    "footer.copyright": "Copyright © 2026 - All right reserved",
  },
  pt: {
    "navbar.home": "Início",
    "navbar.about": "Sobre",
    "navbar.skills": "Habilidades",
    "navbar.projects": "Projetos",
    "navbar.contact": "Contato",
    "navbar.languageToggle": "PT / EN",
    "home.greeting": "Olá, eu sou",
    "home.fullstack": "Desenvolvedor Fullstack",
    "home.mobile": "Desenvolvedor Mobile",
    "home.contactButton": "Fale comigo",
    "home.scrollDown": "🖱️ Role para baixo",
    "about.title": "Sobre mim",
    "about.subtitle": "Conheça um pouco mais sobre mim.",
    "about.personalInfoTitle": "Informações pessoais",
    "about.personalInfoText":
      "Meu nome é Ygor Takashi Nishi e tenho 25 anos. Atualmente sou Desenvolvedor Frontend, com paixão por resolver problemas de forma criativa e inteligente. Tenho 5 anos de experiência na área e estou sempre em busca de novos desafios e oportunidades para crescer.",
    "about.personalInfoMainSkills": "Minhas principais habilidades são:",
    "about.personalInfoSeeMore": "Ver mais",
    "about.resumeTitle": "Meu Currículo",
    "about.resumeParagraph1":
      "Como desenvolvedor com alguns anos de experiência, atuei em vários projetos que me ajudaram a aprimorar minhas habilidades e conhecimentos. Continuo apaixonado por aprender novas tecnologias e metodologias.",
    "about.resumeParagraph2":
      "Já trabalhei em projetos de frontend, backend e mobile, e em todos os projetos costumo atuar com metodologias ágeis, como Scrum e Kanban.",
    "about.resumeParagraph3":
      "Se você quiser saber mais sobre minha vida profissional, pode conferir meu currículo.",
    "about.resumeDownload": "Baixar CV",
    "about.educationTitle": "Minha Formação",
    "about.educationParagraph1":
      "Tenho uma forte formação acadêmica em computação, com curso Técnico em Informática no",
    "about.educationParagraph2":
      "e Bacharelado em Ciência da Computação na",
    "about.educationParagraph3":
      "Durante a vida acadêmica, adquiri experiência em robótica, desenvolvimento de software e pesquisa. Participei de diversos projetos e publiquei alguns artigos em conferências e periódicos.",
    "skills.title": "Minhas Habilidades",
    "skills.subtitle":
      "Aqui estão todas as tecnologias que utilizo para construir meus projetos.",
    "skills.filterBy": "Filtrar por:",
    "skills.filterAll": "Todas",
    "skills.filterFrontend": "Frontend",
    "skills.filterBackend": "Backend",
    "skills.filterMobile": "Mobile",
    "skills.filterDatabase": "Banco de Dados",
    "skills.filterCloud": "Cloud",
    "skills.filterOthers": "Outras",
    "skills.learningMore":
      "E eu continuo aprendendo mais tecnologias para aprimorar minhas habilidades. 🚀",
    "projects.title": "Portfólio",
    "projects.subtitle": "Meus projetos e contribuições mais recentes.",
    "projects.viewProject": "Ver projeto",
    "contact.title": "Contatos",
    "contact.subtitle":
      "Se você quiser falar comigo, aqui estão algumas formas de contato.",
    "contact.emailTitle": "Email",
    "contact.emailCta": "Enviar email",
    "contact.whatsappTitle": "Whatsapp",
    "contact.whatsappCta": "Enviar mensagem",
    "footer.copyright":
      "Copyright © 2026 - Todos os direitos reservados",
  },
};

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

interface LanguageProviderWrapperProps {
  children: React.ReactNode;
}

export const LanguageProviderWrapper = ({
  children,
}: LanguageProviderWrapperProps) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("language") as Language | null;
    if (stored === "en" || stored === "pt") {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("language", language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      toggleLanguage: () =>
        setLanguage((prev) => (prev === "en" ? "pt" : "en")),
      t: (key) => messages[language][key],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProviderWrapper");
  }
  return context;
};

