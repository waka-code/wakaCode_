import React from "react";
import { Routes, Route } from "react-router-dom";

//Img
import rick from "../../img/rick.webp";
import pokemon from "../../img/pokemon.jpeg";
import react from "../../img/react.png";
import styled from "../../img/styled-components.png";
import axios from "../../img/axios.png";
import html from "../../img/html.png";
import jscript from "../../img/jscript.png";
import firstPortfolio from "../../img/firstPortfolio.png";
//json
import Url from "../description/Url.json";
//Routes
import About from "../Pages/About";
import Home from "../Pages/Home";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import Welcome from "../Pages/Welcome";
import DescriptionProyects from "../Pages/DescriptionProyects";

function RoutePage({ t }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome t={t} />} />
        <Route path="/wakaCode_" element={<Welcome t={t} />} />
        <Route path="/home" element={<Home t={t} />} />
        <Route path="/about" element={<About t={t} />} />

        <Route
          path="/portfolio"
          element={
            <DescriptionProyects
              img={rick}
              repositorio={Url.repositoryRick}
              description={t("rick")}
              pages={Url.pageRick}
              react={react}
              axios={styled}
              alt={"proyect"}
              t={t}
            />
          }
        />

        <Route
          path="portfolio/rick"
          element={
            <DescriptionProyects
              img={rick}
              repositorio={Url.repositoryRick}
              description={t("rick")}
              pages={Url.pageRick}
              react={react}
              axios={styled}
              alt={"proyect"}
            />
          }
        />

        <Route
          path="portfolio/firstPortfolio"
          element={
            <DescriptionProyects
              img={firstPortfolio}
              repositorio={Url.repositoryCrud}
              description={t("crud")}
              pages={Url.pageCrud}
              react={html}
              axios={jscript}
              alt={"proyect"}
            />
          }
        />

        <Route
          path="portfolio/pokemon"
          element={
            <DescriptionProyects
              img={pokemon}
              repositorio={Url.repositoryPokemon}
              description={t("pokemon")}
              pages={Url.pagePokemon}
              react={react}
              axios={axios}
              alt={"proyect"}
            />
          }
        />
        <Route
          path="/skills"
          element={
            <Skills
              HTML={"HTML"}
              CSS={"CSS"}
              JAVASCRIPT={"JAVASCRIPT"}
              TYPESCRIPT={"TYPESCRIPT"}
              REACTJS={"REACTJS"}
              SASS={"SASS"}
              in={"BOOTSTRAP"}
            />
          }
        />
        <Route
          path="/skills/fron"
          element={
            <Skills
              HTML={"HTML"}
              CSS={"CSS"}
              JAVASCRIPT={"JAVASCRIPT"}
              TYPESCRIPT={"TYPESCRIPT"}
              REACTJS={"REACTJS"}
              SASS={"SASS"}
              in={"BOOTSTRAP"}
            />
          }
        />
        <Route
          path="/skills/back"
          element={
            <Skills
              HTML={"SQL"}
              CSS={"MONGODB"}
              JAVASCRIPT={"EXPRESS"}
              TYPESCRIPT={"NODE"}
              REACTJS={"FIREBASE"}
            />
          }
        />
        <Route
          path="/skills/tools"
          element={
            <Skills
              HTML={"FIGMA"}
              CSS={"ADOBE XD"}
              JAVASCRIPT={"GIT"}
              TYPESCRIPT={"GITHUB"}
              REACTJS={"AXIOS"}
              SASS={"SPANISH"}
              es={"ENGLISH"}
              in={"CREOLE"}
            />
          }
        />
        <Route
          path="/skills/soft"
          element={
            <Skills
              HTML={"Teamwork"}
              CSS={"Fast learning"}
              JAVASCRIPT={"Paciencia"}
              TYPESCRIPT={"self development"}
              REACTJS={"Perseverance"}
              SASS={"Time anagement"}
            />
          }
        />
        <Route path="/contact" element={<Contact t={t} />} />
      </Routes>
    </>
  );
}

export default RoutePage;
