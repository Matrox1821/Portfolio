import React from "react";

export const AboutMe = () => {
  return (
    <div className="container-am">
      <h2 className="am-title">Sobre Mí</h2>
      <p className="am-text">
        Soy un desarrollador Front-End especializado en React con el uso de
        TypeScript. También tengo conocimientos en el Back-End utilizando bases
        de datos no relacionales.
      </p>
      <div className="tecnologies-container">
        <p className="technologies-text">
          Tecnologías con las que he trabajado recientemente:
        </p>
        <ul className="technologies-list">
          <li>TypeScript</li>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>NodeJS</li>
          <li>MongoDB</li>
          <li>Python</li>
        </ul>
      </div>
    </div>
  );
};
