import React from "react";
import calculadora from "../assets/calculadora.jpg";
import {Card} from "../components/Card";
import {IoEarthSharp, IoLogoGithub} from "react-icons/io5";
import {SiTypescript, SiReact, SiVite} from "react-icons/si";
const proyects = {
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
};
export const Proyects = () => {
  return (
    <section id="proyects">
      <Card
        image={proyects.image}
        title={proyects.title}
        description={proyects.description}
        technologies={proyects.technologies}
        link={proyects.links}
      />
    </section>
  );
};
