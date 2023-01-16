import React from "react";

//json
import des from "../description/desciption.json";

//css
import "../styles/About.css";

//img
import henry from "../../img/henry.png";
import Button from "./Button";

function About({ t }) {
  return (
    <div className="aboutCss" data-aos="fade-right">
      <section data-aos="fade-down-left">
        <p>{t("presentations")}</p>
        <a href={des.cv} target="_blank" useRef="noopener noreferrer">
          <Button btn={t("currículum")} />
        </a>
      </section>
      <section className="aboutImg" data-aos="flip-left">
        <section className="imgBox">
          <section className="boxImg">
            <img src={henry} alt="henry" />
          </section>
        </section>
        <section className="aboutContent">
          <div>
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
