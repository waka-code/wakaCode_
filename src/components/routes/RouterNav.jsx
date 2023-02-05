import { NavLink } from "react-router-dom";

//img
import es from "../../img/espana.png";
import en from "../../img/en.png";
//css
import MenuHamburguesa from "../Pages/menuHamburguer/MenuHamburguesa";
import React, { useState } from "react";

function RouterNav({ t, handleChangeLng }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="routeCss">
      <h1>wakaCode...</h1>
      <nav
        className={` ${isOpen ? "navlist" : "nav_items"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <NavLink className="linkCss linkCssA" to="/home">
          {t("Home")}
        </NavLink>
        <NavLink className="linkCss linkCssA" to="/about">
          {t("About")}
        </NavLink>
        <NavLink className="linkCss linkCssA" to="/portfolio">
          {t("Portfolio")}
        </NavLink>
        <NavLink className="linkCss" to="/skills">
          {t("Skills")}
        </NavLink>
        <NavLink className="linkCss" to="/contact">
          {t("Contact")}
        </NavLink>
      </nav>
      <div id="languaje">
        <img src={es} onClick={() => handleChangeLng("es")} />
        <img src={en} onClick={() => handleChangeLng("en")} />
        <MenuHamburguesa setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </div>
  );
}

export default RouterNav;
