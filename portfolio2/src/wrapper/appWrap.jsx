import React from "react";

import { NavigationDots, SocialMedia } from "../components";

const appWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app-container ${classNames}`}>
        <SocialMedia />
        <div className="app-wrapper app-flex">
          <Component />
          <div className="copyright">
            <p className="p-text">2023 Soroosh</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default appWrap;
