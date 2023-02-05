import React from "react";

//json
import Url from "../../description/Url.json";

//css
import "./About.css";

//img
import henry from "../../../img/henry.png";
import Button from "../btn/Button";


function About({ t }) {
  return (
    <div className="aboutCss" data-aos="fade-right">
      <section data-aos="fade-down-left" id="boxAbout">
        <p id="aboutMe">{t("presentations")}</p>
        <a href={Url.cv} target="_blank" useRef="noopener noreferrer">
          <Button btn={t("currículum")} />
        </a>
      </section>
      <section className="aboutImg" id="aboutImg" data-aos="flip-left">
        <section className="imgBox">
          <section className="boxImg">
            <img src={henry} alt="henry" />
          </section>
        </section>
        <section className="aboutContent">
          <div className="textAbout">
            <h2>Waddimi Saint Louis</h2>
            <br />
            <span>{t("Software Engineer")}</span>
          </div>
        </section>
      </section>
    </div>
  );
}

export default About;
