import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import { Appwrap, MotionWrap } from "../../Wrapper/index.jsx";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type =="abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That
        <span> Good Development</span> <br /> means <span>Good Business</span>
      </h2>

      <div className="app__profile">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTo: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Appwrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
