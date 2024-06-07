import "./Testimonilas.scss";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { urlFor, client } from "../../client";

const Testimonilas = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonilas] = useState([]);
  const [currentindex, setCurrentindex] = useState(0);

  useEffect(() => {
    const query = '*[_type =="testimonials"]';
    const brandsquery = '*[_type =="brands"]';

    client.fetch(query).then((data) => {
      setTestimonilas(data);
    });

    client.fetch(brandsquery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonials-item app__flex">
            <img
              src={urlFor(testimonials[currentindex].imgUrl)}
              alt="testimonials"
            />
          </div>
        </>
      )}
    </>
  );
};

export default Testimonilas;
