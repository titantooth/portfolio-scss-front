import React from "react";
import "./Navbar.scss";
import { images } from "../../constants";

const Navbar = () => {
  const navNames = ["home", "about", "work", "skills", "contact"];
  return (
    <nav className="app-navbar">
      <div className="app-navbar-logo">
        <img src={images.logo} alt="image logo" />
      </div>
      <ul className="app-navbar-links">
        {navNames.map((item) => (
          <li key={`link-${item}`} className="app-flex p-text">
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
