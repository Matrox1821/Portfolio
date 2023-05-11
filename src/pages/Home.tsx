import React from "react";
import {Link} from "react-scroll";
import {IoChevronDownSharp} from "react-icons/io5";
import Asta_edit from "../assets/Asta-edit.jpg";
import Asta from "../assets/Asta.jpg";

export const Home = () => {
  return (
    <section id="home">
      <h1 className="title-name">Galarza Matías</h1>
      <div className="container-image">
        <p className="japanese-words">ガラルザマティアス</p>
        <div className="line-image">
          <span className="line" />
          <img src={Asta} className="image" alt="Galarza Matias con lentes" />
          <img
            src={Asta_edit}
            className="image-back"
            alt="Galarza Matias con lentes"
          />
        </div>
        <p className="japanese-words">ウェブ開発者</p>
      </div>
      <div className="subtitle">
        <svg
          className="line-home first-line"
          viewBox="0 0 377 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M378.129 2L-1.18778 117.618"
            stroke="#2449CD"
            stroke-width="2"
          />
        </svg>
        <svg
          className="line-home second-line"
          viewBox="0 0 377 159"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-1.00964 2.64386L378.71 156.144"
            stroke="#2449CD"
            stroke-width="2"
          />
        </svg>
        <h2>Portafolio</h2>
        <h3>Desarrollador Web</h3>
      </div>
      <Link
        activeClass="active"
        to="about-me"
        spy={true}
        smooth={true}
        duration={500}
        className="link-arrow">
        <IoChevronDownSharp className="down-arrow" />
      </Link>
      <div className="home-lines">
        <svg
          className="home-lines first-line"
          viewBox="0 0 375 123"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-2.12485 72.7582L72.8749 3.25813L153.375 120.258L375.875 59.7582"
            stroke="#2449CD"
            stroke-width="2"
          />
        </svg>
        <svg
          className="home-lines second-line"
          viewBox="0 0 373 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line
            x1="-0.534492"
            y1="106.073"
            x2="374.465"
            y2="2.07274"
            stroke="#FBFBFB"
            stroke-width="2"
          />
        </svg>
      </div>
    </section>
  );
};
