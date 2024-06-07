import React from "react";
import { NavigationDots } from "../Components/index.jsx";

const Appwrap = (Component, idName, classnames) => {
  return function HOC() {
    return (
      <div id={idName} className={`app__container ${classnames}`}>
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">@2024 SURYA</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };
};

export default Appwrap;
