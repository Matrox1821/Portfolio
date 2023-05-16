import React from "react";
import {Link} from "react-scroll";
import {useIsDesktop} from "../../../hooks/useIsDesktop";
const sections = [
  {name: "GM", href: "home", type: "logo"},
  {name: "Sobre Mí", href: "about-me"},
  {name: "Proyectos", href: "proyects"},
  {name: "Portafolio", href: "resume"},
  {name: "Contacto", href: "contact"},
];
const NavItems = () => {
  const sectionsMap = sections.map((section, i) => {
    const {name, href, type} = section;
    const liClassByType = type === "logo" ? "list__logo" : "list__option";
    return (
      <li key={i}>
        <Link
          activeClass="active"
          to={href}
          spy={true}
          smooth={true}
          duration={500}
          className={liClassByType}>
          {name}
        </Link>
      </li>
    );
  });
  return <ul className="navbar__list">{sectionsMap}</ul>;
};

const NavTitle = () => {
  return (
    <Link
      activeClass="active"
      to="home"
      spy={true}
      smooth={true}
      duration={500}>
      <h1 className="navbar__title">Galarza Matías</h1>
    </Link>
  );
};

export const NavBar = () => {
  const isDesktop = useIsDesktop();
  return (
    <nav className="navbar">
      {isDesktop && <NavTitle />}
      <NavItems />
    </nav>
  );
};
