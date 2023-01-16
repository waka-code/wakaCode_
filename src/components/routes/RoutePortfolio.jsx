import React from "react";
import { NavLink } from "react-router-dom";
import rick from "../../img/rick.webp";
import pokemon from "../../img/pokemon.jpeg";
import firstPortfolio from "../../img/firstPortfolio.png";


function RoutePortfolio() {
  return (
    <div className="routePortfolioCss" data-aos="zoom-in">
      <NavLink to="/portfolio/rick" className="projectsPortfolio">
        <img src={rick} alt="projects" />
      </NavLink>
      <NavLink to="/portfolio/pokemon" className="projectsPortfolio">
        <img src={pokemon} alt="projects" />
      </NavLink>
      <NavLink to="/portfolio/firstPortfolio" className="projectsPortfolio">
        <img src={firstPortfolio} alt="projects" />
      </NavLink>
    </div>
  );
}

export default RoutePortfolio;


