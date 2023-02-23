import React from "react";
import { NavLink } from "react-router-dom";

//json and routePages
import Url from "../../description/Url.json";
import IconsSocial from "../home/IconsSocial";

//img and css
import welcome from "../../../img/wlcome.gif";
import fb from "../../../img/fb.png";
import ws from "../../../img/ws.png";
import ins from "../../../img/in.png";
import "./welcome.css";

//react icons
import { FaLaptopCode } from "react-icons/fa";

function Welcome({ t }) {
  return (
    <div className="welcomeCss">
      <section
        className="wlcome"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        id="wlcome"
      >
        <video src={welcome} alt="welcome" className="welcome" />
        <p>
          {t("welcome")}
          <FaLaptopCode />
        </p>
        <IconsSocial
          pageSocial={Url.fb}
          pageSocial1={Url.ws}
          pageSocial2={Url.ins}
          social={fb}
          socials={ws}
          socialss={ins}
        />
      </section>
      <NavLink className="click" to="/Home" id="click">
        <span>{t("Click Here")}</span>
      </NavLink>
    </div>
  );
}

export default Welcome;
