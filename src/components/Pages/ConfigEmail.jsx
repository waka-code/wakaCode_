import Button from "./Button";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { success, warning } from "./ConfigToastify";

function ConfigEmail() {
  const { t } = useTranslation();
  const form = useRef();
  const [name, setName] = useState("name");
  const [email, setEmail] = useState("Email");
  const [text, setText] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7n2dtbq",
        "template_1ll86gm",
        form.current,
        "SDaOCURrjMi7pFBLL"
      )
      .then(
        (result) => {
          success();
          if (result) {
            setName("name");
            setEmail("Email");
            setText("");
          }
        },
        (error) => {
          warning();
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <input
        className="input"
        type="text"
        name="user_name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input"
        type="email"
        name="user_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        name="message"
        className="inputTxt"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <Button type="submit" btn={t("Send")} placeholder={text} />
    </form>
  );
}

export default ConfigEmail;
