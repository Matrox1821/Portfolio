import {BiShapeCircle} from "react-icons/bi";
import {
  IoBookSharp,
  IoPeopleSharp,
  IoExtensionPuzzleSharp,
  IoBulbSharp,
  IoChatboxEllipsesSharp,
  IoLogoGithub,
  IoEarthSharp,
} from "react-icons/io5";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiSass,
  SiVite,
} from "react-icons/si";
import calculadora from "../assets/calculadora.jpg";

export const SKILLS = {
  HARD_SKILLS: [
    {
      Icon: SiTypescript,
      label: "Typescript",
    },
    {
      Icon: SiJavascript,
      label: "JavaScript (ES6+)",
    },
    {
      Icon: SiReact,
      label: "React",
    },
    {
      Icon: SiNodedotjs,
      label: "NodeJS",
    },
    {
      Icon: SiMongodb,
      label: "MongoDB",
    },
    {
      Icon: SiSass,
      label: "Sass",
    },
  ],
  SOFT_SKILLS: [
    {
      Icon: IoBookSharp,
      label: "Rápido Aprendizaje",
    },
    {
      Icon: IoExtensionPuzzleSharp,
      label: "Solución de Problemas",
    },
    {
      Icon: IoPeopleSharp,
      label: "Trabajo en Equipo",
    },
    {
      Icon: IoBulbSharp,
      label: "Creatividad",
    },
    {
      Icon: BiShapeCircle,
      label: "Adaptabilidad",
    },
    {
      Icon: IoChatboxEllipsesSharp,
      label: "Comunicación",
    },
  ],
};

export const PROJECTS = [
  {
    image: calculadora,
    title: "Calculadora",
    description:
      "La aplicación realiza operaciones matemáticas básicas, permitiendo ingresar números y operar con ellos, mostrando los resultados en tiempo real.",
    links: [
      {
        path: "https://github.com/Matrox1821/calculator",
        Type: IoLogoGithub,
      },
      {
        path: "https://calculadora-galarza-matias.netlify.app/",
        Type: IoEarthSharp,
      },
    ],
    technologies: [{Icon: SiTypescript}, {Icon: SiReact}, {Icon: SiVite}],
  },
  {
    image: calculadora,
    title: "Calculadora",
    description:
      "La aplicación realiza operaciones matemáticas básicas, permitiendo ingresar números y operar con ellos, mostrando los resultados en tiempo real.",
    links: [
      {
        path: "https://github.com/Matrox1821/calculator",
        Type: IoLogoGithub,
      },
      {
        path: "https://calculadora-galarza-matias.netlify.app/",
        Type: IoEarthSharp,
      },
    ],
    technologies: [{Icon: SiTypescript}, {Icon: SiReact}, {Icon: SiVite}],
  },
];
