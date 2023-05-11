import React from "react";
import {ICard} from "../../types/Interfaces";

/**
 * Función Card que recibe una imágen, un título, una descripción, tecnologías utilizadas y links.
 * @param props
 * @returns Card Component
 */
export const Card = ({
  image,
  title,
  description,
  technologies,
  link,
}: ICard) => {
  return (
    <div className="card">
      <div className="image-container">
        <img className="image-container--image" src={image} alt={title} />
        <div className="image-container--icons-container">
          {technologies.map(({Icon}, i) => {
            return <Icon className="image-container__icon" key={i} />;
          })}
        </div>
      </div>
      <div className="text-container">
        <h2 className="text-container--title">{title}</h2>
        <p className="text-container--description">{description}</p>
        <div className="text-container--links-container">
          {link.map(({path, Type}, i) => {
            return (
              <a className="text-container--link" href={path} key={i}>
                <Type className="text-container--link__icon" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
