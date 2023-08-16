import React from "react";
const navNames = ["home", "about", "work", "skills", "testimonials", "contact"];
const NavigationDots = ({ active }) => {
  return (
    <div className="app-navigation">
      {navNames.map((item, index) => (
        <a
          style={active === item ? { backgroundColor: "#313131" } : {}}
          className="app-navigation-dot"
          key={item + index}
          onClick={() => setToggle(false)}
          href={`#${item}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
