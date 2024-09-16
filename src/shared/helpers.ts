import Css from "./../components/icons/technologies/Css.astro";
import NextJs from "./../components/icons/technologies/NextJs.astro";
import React from "./../components/icons/technologies/React.astro";
import TypeScript from "./../components/icons/technologies/TypeScript.astro";
import AstroIcon from "./../components/icons/technologies/AstroIcon.astro";
import Html from "./../components/icons/technologies/Html.astro";
import JavaScript from "./../components/icons/technologies/JavaScript.astro";
import Express from "./../components/icons/technologies/Express.astro";
import NodeJs from "./../components/icons/technologies/NodeJs.astro";
import MongoDb from "./../components/icons/technologies/MongoDb.astro";
import PostgreSql from "./../components/icons/technologies/PostgreSql.astro";
import TailwindCss from "./../components/icons/technologies/TailwindCss.astro";

import Calculator from "./../assets/calculator.webp";
import LearnLanguagesOnline from "./../assets/learn-languages-online.webp";

export const TECH_LIST = [
  { label: "React", Element: React },
  { label: "Next.js", Element: NextJs },
  { label: "TypeScript", Element: TypeScript },
  { label: "CSS", Element: Css },
  { label: "Astro", Element: AstroIcon },
  { label: "TailwindCSS", Element: TailwindCss },
  { label: "Node.js", Element: NodeJs },
  { label: "Express", Element: Express },
  { label: "MongoDB", Element: MongoDb },
  { label: "PostgreSQL", Element: PostgreSql },
  { label: "JavaScript", Element: JavaScript },
  { label: "HTML", Element: Html },
];

export const SECTIONS = [
  { href: "#home", label: "Inicio" },
  { href: "#about-me", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
];

export const PROJECTS = [
  {
    title: "Learn Languages Online",
    description: [
      "Una página para aprender distintos idiomas de una manera fácil y divertida.",
      "En este proyecto aprendí a manejar bases de datos y a trabajar en equipo, hizo que mejore mi lógica en Back-End y el uso de los datos dinámicos.",
    ],
    projectTechs: [TypeScript, NextJs, PostgreSql, TailwindCss],
    image: {
      src: LearnLanguagesOnline,
      alt: "",
    },
    links: {
      pageLink: "https://learn-languages-zeta.vercel.app",
      githubLink: "https://github.com/fatso1000/learn-languages",
    },
  },
  {
    title: "Calculadora",
    description: [
      "Una calculadora que permite resolver todo tipo de cuentas básicas.",
      "Este fue un buen proyecto para empezar, me hizo mejorar mi lógica y aprendí cómo manejar estados.",
    ],
    projectTechs: [TypeScript, React],
    image: {
      src: Calculator,
      alt: "Demostración del proyecto Calculadora",
    },
    links: {
      pageLink: "https://calculadora-galarza-matias.netlify.app",
      githubLink: "https://github.com/Matrox1821/calculator",
    },
  },
];
