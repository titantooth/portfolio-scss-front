import React from "react";
import "./About.scss";
import { useState, useEffect } from "react";
import { appWrap } from "../../wrapper";

import { motion } from "framer-motion";
import { images } from "../../constants";

const abouts = [
  {
    title: "Web Development",
    description: "I am a Good WebDev",
    imgUrl: images.about01,
  },
  {
    title: "Web Design",
    description: "I am a Good Web Designer",
    imgUrl: images.about02,
  },
  {
    title: "UI/UX",
    description: "I am a Good UI/UX Designer",
    imgUrl: images.about03,
  },
  {
    title: "Data Scientist",
    description: "I am a Good Data Scientist",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that
        <span> Good Design</span>
        <br />
        Means
        <span> Good Business</span>
      </h2>
      <div className="app-profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app-profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt="about img" />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default appWrap(About, "about");
