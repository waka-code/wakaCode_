import React from "react";
import { NavLink } from "react-router-dom";
import rick from "../../img/rick.webp";
import pokemon from "../../img/pokemon.jpeg";
import firstPortfolio from "../../img/firstPortfolio.png";
import homepage from "../../img/examen.png";
import inventario from "../../img/inventario.jpg";

function RoutePortfolio() {
  return (
    <div className="routePortfolioCss" id="routePortfolioCss" data-aos="zoom-in">
      <NavLink to="/portfolio/rick" className="projectsPortfolio">
        <img src={rick} alt="projects" />
      </NavLink>
      <NavLink to="/portfolio/pokemon" className="projectsPortfolio">
        <img src={pokemon} alt="projects" />
      </NavLink>
      <NavLink to="/portfolio/firstPortfolio" className="projectsPortfolio">
        <img src={firstPortfolio} alt="projects" />
      </NavLink>
      <NavLink to="/portfolio/homePage" className="projectsPortfolio">
        <img src={homepage} alt="projects" />
      </NavLink>
      <NavLink to="/portfolio/Inventario" className="projectsPortfolio">
        <img src={inventario} alt="projects" />
      </NavLink>
    </div>
  );
}

export default RoutePortfolio;


