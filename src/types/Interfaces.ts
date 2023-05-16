import {ReactNode} from "react";
import {IconType} from "react-icons";

export interface ILayout {
  children?: ReactNode;
}
interface ILink {
  path: string;
  Type: IconType;
}
interface ITechnologies {
  Icon: IconType;
}
export interface ICard {
  image: string;
  title: string;
  description: string;
  technologies: ITechnologies[];
  link: ILink[];
}

interface Skill {
  Icon: IconType;
  label: string;
}
export interface ISkillIcons {
  skills: Skill[];
}
