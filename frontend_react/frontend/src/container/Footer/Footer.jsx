import React, { useState } from "react";
import "./Footer.scss";
import { images } from "../../constants";
import { Appwrap, MotionWrap } from "../../Wrapper";
import { client } from "../../client";

const Footer = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmited, setFormSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formdata;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setFormSubmited(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a Coffe & Chat With me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:suriaprakashsuri@gmail.com" className="p-text">
            suriaprakashsuri@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a href="Phone:6383328196" className="p-text">
            6383328196
          </a>
        </div>
      </div>

      {!formSubmited ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              value={name}
              name="name"
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Email"
              value={email}
              name="email"
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
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch</h3>
        </div>
      )}
    </>
  );
};

export default Appwrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
