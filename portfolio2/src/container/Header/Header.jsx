import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

const Header = () => {
  return (
    <div className="app-header app-flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app-header-info"
      >
        <div className="app-header-badge">
          <div className="badge-cmp app-flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am </p>
              <h1 className="head-text">Soroosh</h1>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
