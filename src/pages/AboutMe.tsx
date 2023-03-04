import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPython,
} from "react-icons/si";
import asta_edit from "../assets/Asta-edit.jpg";
export const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="am-container">
        <div className="am-lines">
          <svg
            className="am-lines first-line"
            viewBox="0 0 382 352"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
            xmlns="http://www.w3.org/2000/svg"
          >
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
      <div className="tech-container">
        <div className="tech-text-container">
          <h2 className="tech-title">{`<Tecnologías/>`}</h2>
          <p>Tecnologías con las que he trabajado recientemente:</p>
        </div>
        <ul className="tech-list">
          <li className="tech">
            <SiTypescript className="tech-icon" />
            <h3>TypeScript</h3>
          </li>
          <li className="tech">
            <SiJavascript className="tech-icon" />
            <h3>JavaScript (ES6+)</h3>
          </li>
          <li className="tech">
            <SiReact className="tech-icon" />
            <h3>React</h3>
          </li>
          <li className="tech">
            <SiNodedotjs className="tech-icon" />
            <h3>NodeJS</h3>
          </li>
          <li className="tech">
            <SiMongodb className="tech-icon" />
            <h3>MongoDB</h3>
          </li>
          <li className="tech">
            <SiPython className="tech-icon" />
            <h3>Python</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};
