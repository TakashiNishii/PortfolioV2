import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
    theme: {
      fontFamily: {
        sans: ["Chakra Petch", "ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Chakra Petch"],
        body: ["Chakra Petch"],
      },
    },
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
"primary": "#f85e00",
        
"secondary": "#ff9932",
        
"accent": "#3FA7D6",
        
"neutral": "#F6E27F",
        
"base-100": "#fff8ec",

"base-200": "#000",
        
"info": "#2563eb",
        
"success": "#15803d",
        
"warning": "#cc4402",
        
"error": "#e11d48",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "#6C58C7",
          
          "secondary": "#9895e4",
                   
          "accent": "#E9CE2C",
                   
          "neutral": "#CA3C25",
                   
          "base-100": "#292343",

          "base-200": "#fff",
                   
          "info": "#2563eb",
                   
          "success": "#15803d",
                   
          "warning": "#cc4402",
                   
          "error": "#e11d48",
        },
      },
    ],

  },
  plugins: [require("daisyui")],
};
export default config;
