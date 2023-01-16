import React from "react";
import axios from "../../img/iconSkills/axios.png";
import node from "../../img/iconSkills/node.png";
import ex from "../../img/iconSkills/ex.png";
import mongo from "../../img/iconSkills/mongo.png";
import sql from "../../img/iconSkills/sql.png";
import html from "../../img/iconSkills/html.png";
import css from "../../img/iconSkills/css.png";
import js from "../../img/iconSkills/js.png";
import ts from "../../img/iconSkills/ts.png";
import react from "../../img/iconSkills/react.png";
import sass from "../../img/iconSkills/sql.png";
import bt from "../../img/iconSkills/bt.png";
import git from "../../img/iconSkills/git.png";
import github from "../../img/iconSkills/github.png";
import figma from "../../img/iconSkills/figma.png";
import xd from "../../img/iconSkills/xd.png";
import rd from "../../img/rd.png";
import en from "../../img/en.png";
import cr from "../../img/cr.png";

function Box() {
  return (
    <>
      <section className="killsAnimete">
        <section className="box" id="box-front">
          <span>
            <img src={axios} alt="axios" />
          </span>
          <span>
            <img src={node} alt="node" />
          </span>
          <span>
            <img src={ex} alt="ex" />
          </span>
        </section>

        <section className="box" id="box-right">
          <span>
            <img src={html} alt="html" />
          </span>
          <span>
            <img src={css} alt="axios" />
          </span>
          <span>
            <img src={js} alt="js" />
          </span>
        </section>

        <section className="box" id="box-back">
          <span>
            <img src={git} alt="git" />
          </span>
          <span>
            <img src={github} alt="github" />
          </span>
          <span>
            <img src={figma} alt="figma" />
          </span>
        </section>

        <section className="box" id="box-left">
          <span>
            <img src={rd} alt="rd" />
          </span>
          <span>
            <img src={cr} alt="cr" />
          </span>
          <span>
            <img src={en} alt="en" />
          </span>
        </section>

        <section className="box" id="box-top">
          <span>
            <img src={sass} alt="sass" />
          </span>
          <span>
            <img src={bt} alt="bt" />
          </span>
          <span>
            <img src={react} alt="react" />
          </span>
          <span>
            <img src={sql} alt="sql" />
          </span>
        </section>

        <section className="box" id="box-bottom">
          <span>
            <img src={mongo} alt="mongo" />
          </span>
          <span>
            <img src={ts} alt="ts" />
          </span>
          <span>
            <img src={xd} alt="xd" />
          </span>
        </section>
      </section>
    </>
  );
}

export default Box;
