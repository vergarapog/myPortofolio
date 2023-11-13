import React, { useState, useEffect } from "react";
import "./ScrollToTop.scss";

import { useGlobalContext } from "../../context";

const ScrollToTop = () => {
  const { isDarkMode } = useGlobalContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
        console.log(isVisible);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      <a
        className={`bottom ${isDarkMode ? "dark-mode" : ""} ${
          isVisible ? "visible" : ""
        }`}
        href="#intro"
      >
        <img src="assets/down.png" alt="" />
      </a>
    </div>
  );
};

export default ScrollToTop;
