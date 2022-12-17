import React from "react";
import Matias from "../assets/GalarzaMatias.jpg";

export const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title-name">Galarza Matías</h1>
      <div className="container-image">
        <p className="japanese-words">ガラルザマティアス</p>
        <img src={Matias} className="image" alt="Galarza Matias con lentes" />
        <p className="japanese-words">ウェブ開発者</p>
      </div>
      <div className="subtitle">
        <h2>Portafolio</h2>
        <h3>Desarrollador Web</h3>
        <div className="down-arrow">
          <span className="line1"></span>
          <span className="line2"></span>
        </div>
      </div>
    </div>
  );
};
