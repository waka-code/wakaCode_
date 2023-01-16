import React from "react";
import { NavLink } from "react-router-dom";

//img
import es from "../../img/rd.png";
import en from "../../img/en.png";

function RouterNav({ t, handleChangeLng }) {
  return (
    <div className="routeCss">
      <h1>wakaCode..</h1>
      <nav>
        <NavLink className="linkCss linkCssA" to="/home">
          {t("Home")}
        </NavLink>
        <NavLink className="linkCss linkCssA" to="about">
          {t("About")}
        </NavLink>
        <NavLink className="linkCss linkCssA" to="portfolio">
          {t("Portfolio")}
        </NavLink>
        <NavLink className="linkCss" to="skills">
          {t("Skills")}
        </NavLink>
        <NavLink className="linkCss" to="contact">
          {t("Contact")}
        </NavLink>
      </nav>
      <div id="languaje">
        <img src={es} onClick={() => handleChangeLng("es")} />
        <img src={en} onClick={() => handleChangeLng("en")} />
      </div>
    </div>
  );
}

export default RouterNav;
