import React from "react";
import "./Footer.scss";
import { images } from "../../constants";
import { useState } from "react";
import { appWrap, motionWrap } from "../../wrapper";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      type: "contact",
      name: name,
      email: email,
      message: message,
    };
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & let's meet</h2>
      <div className="app-footer-cards">
        <div className="app-footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:ali.rabieeie@gmail.com" className="p-text">
            ali.rabieeie@gmail.com
          </a>
        </div>
        <div className="app-footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +989304739047" className="p-text">
            +98 930 473 9047
          </a>
        </div>
      </div>

      <div className="app-footer-form app-flex">
        <div className="app-flex">
          <input
            name="name"
            type="text"
            className="p-text"
            placeholder="Your Name"
            value={name}
            onChange={handleChangeInput}
          />
        </div>
        <div className="app-flex">
          <input
            name="email"
            type="email"
            className="p-text"
            placeholder="Your E-mail"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={handleChangeInput}
          ></textarea>
        </div>

        <button className="p-text" type="button" onClick={handleSubmit}>
          {loading ? "Sending" : "Send"}
        </button>
      </div>
    </>
  );
};

export default appWrap(
  motionWrap(Footer, "app-footer"),
  "contact",
  "app-whitebg"
);
