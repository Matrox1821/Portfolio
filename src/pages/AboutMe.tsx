import React from "react";
import {BiShapeCircle} from "react-icons/bi";
import {
  IoBookSharp,
  IoPeopleSharp,
  IoExtensionPuzzleSharp,
  IoBulbSharp,
  IoChatboxEllipsesSharp,
  IoPersonSharp,
  IoHardwareChipSharp,
} from "react-icons/io5";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiSass,
} from "react-icons/si";
import asta_edit from "../assets/Asta-edit.jpg";

const HARD_SKILLS = [
  {
    ReactIcon: SiTypescript,
    label: "Typescript",
  },
  {
    ReactIcon: SiJavascript,
    label: "JavaScript (ES6+)",
  },
  {
    ReactIcon: SiReact,
    label: "React",
  },
  {
    ReactIcon: SiNodedotjs,
    label: "NodeJS",
  },
  {
    ReactIcon: SiMongodb,
    label: "MongoDB",
  },
  {
    ReactIcon: SiSass,
    label: "Sass",
  },
];

const SOFT_SKILLS = [
  {
    ReactIcon: IoBookSharp,
    label: "Rápido Aprendizaje",
  },
  {
    ReactIcon: IoPeopleSharp,
    label: "Trabajo en Equipo",
  },
  {
    ReactIcon: IoExtensionPuzzleSharp,
    label: "Solución de Problemas",
  },
  {
    ReactIcon: IoBulbSharp,
    label: "Creatividad",
  },
  {
    ReactIcon: BiShapeCircle,
    label: "Adaptabilidad",
  },
  {
    ReactIcon: IoChatboxEllipsesSharp,
    label: "Comunicación",
  },
];

export const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="am-container">
        <div className="am-lines">
          <svg
            className="am-lines first-line"
            viewBox="0 0 382 352"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M383.5 350.5L-1.5 1.50001"
              stroke="#2449CD"
              stroke-width="2"
            />
          </svg>
          <svg
            className="am-lines second-line"
            viewBox="0 0 398 324"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M-2 323L400 1" stroke="white" stroke-width="2" />
          </svg>
        </div>
        <img src={asta_edit} className="am-image" alt="imagen de repuesto" />
        <hr className="am-line" />
        <p className="am-text">
          &nbsp;&nbsp;Soy un desarrollador Front-End especializado en React con
          el uso de TypeScript. También tengo conocimientos en el Back-End
          utilizando bases de datos no relacionales.
        </p>
      </div>
      <div className="skills-container">
        <div className="skills-type">
          <div className="type">
            <IoHardwareChipSharp className="type--icon" />
            <h3 className="type--title">Hard Skills</h3>
          </div>
          <div className="type">
            <IoPersonSharp className="type--icon" />
            <h3 className="type--title">Soft Skills</h3>
          </div>
        </div>
        <div className="skills">
          <ul className="skills--list">
            {HARD_SKILLS.map(({ReactIcon, label}) => {
              return (
                <li className="tech">
                  <ReactIcon className="tech--icon" />
                  <div className="tech--title">
                    <h3>{label}</h3>
                  </div>
                </li>
              );
            })}
          </ul>
          <ul className="skills--list">
            {SOFT_SKILLS.map(({ReactIcon, label}) => {
              return (
                <li className="tech">
                  <ReactIcon className="tech--icon" />
                  <div className="tech--title">
                    <h3>{label}</h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
