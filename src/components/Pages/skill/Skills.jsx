import React from "react";
import RouteSkill from "../../routes/RouteSkill";
import "./Skill.css";
import waka from "../../../img/wakatime.png";
import Box from "./Box";

function Skills(props) {
  return (
    <div className="skillCss" id="skillCss">
      <section className="routeSkillCss" data-aos="fade-down-right">
        <RouteSkill />
      </section>
      <section className="skillList" id="skillList">
        <ul className="typeSkills" data-aos="zoom-in">
          <li>{props.HTML}</li>
          <li>{props.CSS}</li>
          <li>{props.JAVASCRIPT}</li>
          <li>{props.TYPESCRIPT}</li>
          <li>{props.REACTJS}</li>
          <li>{props.SASS}</li>
          <li>{props.in}</li>
          <li>{props.es}</li>
          <li>{props.cr}</li>
        </ul>
        <img src={waka} alt="WAKA" className="waka" data-aos="zoom-in-up" />
        <div className="listSkillsAnimete">
          <Box />
        </div>
      </section>
    </div>
  );
}

export default Skills;
