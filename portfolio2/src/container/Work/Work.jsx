import React from "react";
import "./Work.scss";
import { images } from "../../constants";
import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { appWrap, motionWrap } from "../../wrapper";

const works = [
  {
    title: "project1",
    tag: "UI/UX",
    imgUrl: images.about01,
  },
  {
    title: "project2",
    tag: "Web app",
    imgUrl: images.about02,
  },
  {
    title: "project3",
    tag: "Mobile app",
    imgUrl: images.about03,
  },
  {
    title: "project4",
    tag: "React js",
    imgUrl: images.about04,
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState(works);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tag.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text button-esqu">
        My Creative
        <span> Portfolio </span>
        Section
      </h2>
      <div className="app-work-filter">
        {["UI/UX", "Web app", "Mobile app", "React js", "All"].map(
          (item, index) => (
            <div
              className={`app-work-filter-item app-flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
              key={index}
              onClick={() => handleWorkFilter(item)}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app-work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app-work-item app-flex" key={work + index}>
            <div className="app-work-img app-flex">
              <img src={work.imgUrl} alt="projects image" />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app-work-hover app-flex"
              >
                <a href={""} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app-flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={""} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app-flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app-work-content app-flex">
              <h4 className="bold-text">{work.title}</h4>
              {/* <p className="p-text" style={{marginTop:10}}>description</p> */}
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default appWrap(motionWrap(Work, "app-works"), "work");
