import React from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { easeOut, motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navNames = ["home", "about", "work", "skills", "contact"];
  return (
    <nav className="app-navbar">
      <div className="app-navbar-logo">
        <h1>RABIEE</h1>
        {/* <img src={images.logo} alt="image logo" /> */}
      </div>
      <ul className="app-navbar-links">
        {navNames.map((item) => (
          <li key={`link-${item}`} className="app-flex p-text">
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app-navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: easeOut }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app-navbar-links">
              {navNames.map((item) => (
                <li key={item}>
                  <a onClick={() => setToggle(false)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
