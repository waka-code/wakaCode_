import IconsSocial from "./IconsSocial";
//img
import fb from "../../img/fb.png";
import ws from "../../img/ws.png";
import ins from "../../img/in.png";

//json
import Url from "../description/Url.json";

//css
import "../styles/Contact.css";
import ConfigEmail from "./ConfigEmail";
import ConfigToastify from "./ConfigToastify";

function Contact({ t }) {
  return (
    <div className="contactCss">
      <h2 data-aos="fade-right">{t("Contacto")}</h2>
      <section className="contactContenedorCss" data-aos="zoom-in-down">
        <ConfigEmail  />
        <IconsSocial
          pageSocial={Url.fb}
          pageSocial1={Url.ws}
          pageSocial2={Url.ins}
          social={fb}
          socials={ws}
          socialss={ins}
        />
      </section>
      <ConfigToastify />
    </div>
  );
}

export default Contact;
