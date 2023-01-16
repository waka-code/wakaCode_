import React from "react";
import { NavLink } from "react-router-dom";

//json and routePages
import des from "../description/desciption.json";
import IconsSocial from "./IconsSocial";

//img and css
import welcome from "../../img/wlcome.gif";
import fb from "../../img/fb.png";
import ws from "../../img/ws.png";
import ins from "../../img/in.png";
import "../styles/welcome.css";

//react icons
import { FaLaptopCode } from "react-icons/fa";

function Welcome({ t }) {
  return (
    <div className="welcomeCss">
      <section
        className="wlcome"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src={welcome} alt="welcome" className="welcome" />
        <p>
          {t("welcome")}
          <FaLaptopCode />
        </p>
        <IconsSocial
          pageSocial={des.fb}
          pageSocial1={des.ws}
          pageSocial2={des.ins}
          social={fb}
          socials={ws}
          socialss={ins}
        />
      </section>
      <NavLink className="click" to="/Home">
        <span>{t("Click Here")}</span>
      </NavLink>
    </div>
  );
}

export default Welcome;
