import React from "react";


function IconsSocial(props) {
  return (
    <section className="iconsPages" id="iconsPages">
      <a
        href={props.pageSocial}
        target="_blank"
        useRef="noopener noreferrer"
        data-aos="zoom-in-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <button>
          <img src={props.social} alt="click" />
        </button>
      </a>
      <a
        href={props.pageSocial1}
        target="_blank"
        useRef="noopener noreferrer"
        data-aos="zoom-in-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <button>
          <img src={props.socials} alt="click" />
        </button>
      </a>
      <a
        href={props.pageSocial2}
        target="_blank"
        useRef="noopener noreferrer"
        data-aos="zoom-in-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <button>
          <img src={props.socialss} alt="click" />
        </button>
      </a>
    </section>
  );
}

export default IconsSocial;
