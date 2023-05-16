import React from "react";
import {IoPersonSharp, IoHardwareChipSharp} from "react-icons/io5";
import {HARD_SKILLS, SOFT_SKILLS} from "../helpers/Icons";
import {BsFilePersonFill} from "react-icons/bs";
import asta_edit from "../assets/Asta-edit.jpg";
import {ISkillIcons} from "../types/Interfaces";

const SkillIcons = ({skills}: ISkillIcons) => {
  const SkillElement = skills.map(({Icon, label}) => {
    return (
      <li className="skill">
        <Icon className="skill--icon" />
        <h3 className="skill--title">{label}</h3>
      </li>
    );
  });
  return <>{SkillElement}</>;
};

export const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="title-container">
        <BsFilePersonFill className="icon" />
        <h2>Sobre Mi</h2>
      </div>
      <div className="container">
        {/* <div className="am-lines">
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
        </div> */}
        <img
          src={asta_edit}
          className="container--image"
          alt="imagen de repuesto"
        />
        <hr className="container--line" />
        <p className="container--text">
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
            <SkillIcons skills={HARD_SKILLS} />
          </ul>
          <ul className="skills--list">
            <SkillIcons skills={SOFT_SKILLS} />
          </ul>
        </div>
      </div>
    </section>
  );
};
