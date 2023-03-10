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
import css from "../../img/iconSkills/css.png";
import html5 from "../../img/iconSkills/html.png";
import examen from "../../img/examen.png";
import inventario from "../../img/inventario.jpg";
import c from "../../img/c.png";
import sql from "../../img/sql.png";
//json
import Url from "../description/Url.json";
//Routes
import About from "../Pages/about/About";
import Home from "../Pages/home/Home";
import Skills from "../Pages/skill/Skills";
import Contact from "../Pages/contact/Contact";
import Welcome from "../Pages/welcome/Welcome";
import DescriptionProyects from "../Pages/portafolio/DescriptionProyects";

function RoutePage({ t }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome t={t} />} />
        {<Route path="/wakaCode_" element={<Welcome t={t} />} />}
        <Route path="/home" element={<Home t={t} />} />
        <Route path="/about" element={<About t={t} />} />

        <Route
          path="/portfolio"
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
          path="/portfolio/rick"
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
          path="/portfolio/firstPortfolio"
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
          path="/portfolio/homePage"
          element={
            <DescriptionProyects
              img={examen}
              repositorio={Url.repositoryHomePage}
              description={t("examen")}
              pages={Url.pageHomePage}
              react={html5}
              axios={css}
              alt={"proyect"}
            />
          }
        />

        <Route
          path="/portfolio/pokemon"
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
          path="/portfolio/Inventario"
          element={
            <DescriptionProyects
              img={inventario}
              repositorio={Url.repositoryInventario}
              description={t("sistemasInventario")}
              pages={Url.videoInventario}
              react={c}
              axios={sql}
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
              HTML={"C#"}
              CSS={"SQL"}
              JAVASCRIPT={"NODE"}
              TYPESCRIPT={"EXPRESS"}
              REACTJS={"MONGODB"}
              SASS={"FIREBASE"}
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
