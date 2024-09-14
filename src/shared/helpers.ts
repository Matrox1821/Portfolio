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
