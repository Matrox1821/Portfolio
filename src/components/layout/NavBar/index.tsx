import React from "react";
import { NavLink } from "react-router-dom";

const sections = [
  { name: "GM", href: "/", type: "logo" },
  { name: "Sobre Mí", href: "/sobre-mi" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Portafolio", href: "/portafolio" },
  { name: "Contacto", href: "/contacto" },
];

const NavItems = () => {
  const sectionsMap = sections.map((section, i) => {
    const { name, href, type } = section;
    const liClassByType = type === "logo" ? "list__logo" : "list__option";
    return (
      <li key={i} className={liClassByType}>
        <NavLink
          to={href}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {name}
        </NavLink>
      </li>
    );
  });
  return <ul className="navbar__list">{sectionsMap}</ul>;
};

export const NavBar = () => {
  return (
    <nav className="navbar">
      <NavItems />
    </nav>
  );
};
