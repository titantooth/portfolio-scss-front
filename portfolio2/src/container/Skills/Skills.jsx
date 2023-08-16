import React from "react";
import { images } from "../../constants";
import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { appWrap } from "../../wrapper";
import "./Skills.scss";
import { Tooltip as ReactTooltip } from "react-tooltip";
const skill = [
  {
    name: "React",
    bg: "rgba(255, 255, 255, 0.729)",
    icon: images.react,
  },
  {
    name: "Node",
    bg: "rgba(255, 255, 255, 0.729)",
    icon: images.node,
  },
  {
    name: "Git",
    bg: "rgba(255, 255, 255, 0.729)",
    icon: images.git,
  },
  {
    name: "CSS",
    bg: "rgba(255, 255, 255, 0.729)",
    icon: images.css,
  },
  {
    name: "Figma",
    bg: "rgba(255, 255, 255, 0.729)",
    icon: images.figma,
  },
  {
    name: "JavaScript",
    bg: "rgba(255, 255, 255, 0.729)",
    icon: images.javascript,
  },
  {
    name: "Python",
    bg: "rgba(255, 255, 255, 0.729)",
    icon: images.python,
  },
  {
    name: "SASS",
    bg: "rgba(255, 255, 255, 0.729)",
    icon: images.sass,
  },
];

const Skills = () => {
  const [skills, setSkills] = useState(skill);

  return (
    <>
      <h2 className="head-text weird">Skills & Experience</h2>

      <div className="app-skills-container">
        <motion.div className="app-skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1], transition: 0.5 }}
              className="app-skills-item app-flex"
              key={skill.name}
            >
              <div className="app-flex" style={{ backgroundColor: skill.bg }}>
                <img src={skill.icon} alt="skill icon" />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
