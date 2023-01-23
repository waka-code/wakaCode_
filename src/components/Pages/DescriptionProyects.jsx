import React from "react";
import RoutePortfolio from "../routes/RoutePortfolio";
import "../styles/DescriptionProyects.css";
import Button from "./Button";

function DescriptionProyects(props) {
  return (
    <>
      <section className="proyectsDescriptions">
        <section className="portafolio">
          <section className="proyectLogo" data-aos="fade-right">
            <img src={props.img} alt={props.alt} />
            <a
              href={props.repositorio}
              target="_blank"
              useRef="noopener noreferrer"
            >
              <Button btn={"Repository"} />
            </a>
            <a href={props.pages} target="_blank" useRef="noopener noreferrer">
              <Button btn={"Page"} />
            </a>
          </section>
          <section className="DescriptionAndSkill" id="DescriptionAndSkill" data-aos="zoom-in">
            <p>{props.description}</p>
            <span>Used tools</span>
            <section className="imgSkill">
              <img src={props.react} alt={props.alt} />
              <img src={props.axios} alt={props.alt} />
            </section>
          </section>
        </section>
        <RoutePortfolio />
      </section>
    </>
  );
}

export default DescriptionProyects;
