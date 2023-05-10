import {AboutMe} from "../pages/AboutMe";
import {Contact} from "../pages/Contact";
import {Home} from "../pages/Home";
import {Proyects} from "../pages/Proyects";
import {Resume} from "../pages/Resume";

export const routes = [
  {path: "/", component: Home},
  {path: "/sobre-mi", component: AboutMe},
  {path: "/proyectos", component: Proyects},
  {path: "/portafolio", component: Resume},
  {path: "/contacto", component: Contact},
];
