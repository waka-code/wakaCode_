import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import "./Home.css";

//json
import Url from "../../description/Url.json";

//react route
import IconsSocial from "./IconsSocial";


//img
import ln from "../../../img/ln.png";
import st from "../../../img/st.png";
import git from "../../../img/git.png";

function Home({ t }) {
  return (
    <div className="homeCss" id="homeCss">
      <section className="welcomePage" id="welcomePage" data-aos="fade-right">
        <h3>{t("Hello")}</h3>
        <h3>{t("I am Louis")}..</h3>
        <h2>
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Oswald",
              color: "#1b1b12",
              fontWeight: 700,
              fontSize: "1.5em",
            }}
            startDelay={100}
            cursorColor="#3F3D56"
            multiText={[
              "I am Student..",
              `I am FrontEnd Developer..`,
              "I am Software Engineer..",
              "And this wakaCode.",
              "where everything is possible.",
            ]}
            multiTextDelay={500}
            typeSpeed={150}
            multiTextLoop
          />
        </h2>
      </section>
      <IconsSocial
        pageSocial={Url.linkedin}
        pageSocial1={Url.stackOverflow}
        pageSocial2={Url.github}
        social={ln}
        socials={st}
        socialss={git}
      />
    </div>
  );
}

export default Home;
