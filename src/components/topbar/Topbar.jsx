import React from "react";
import { useEffect, useRef } from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import { gsap } from "gsap";
import { useGlobalContext } from "../../context";

import { FaMoon } from "react-icons/fa";

const Topbar = ({ menuValue, setMenu }) => {
  const topbarRef = useRef();

  const { isNavDark, isDarkMode, setIsDarkMode } = useGlobalContext();

  useEffect(() => {
    gsap.from(topbarRef.current, {
      duration: 1,
      y: "-100%",
      ease: "bounce",
      delay: 3,
      opacity: 0,
    });
  }, []);

  const handleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  console.log(isDarkMode);

  return (
    <div
      className={
        "topbar " +
        (menuValue && "active") +
        " " +
        (isNavDark && "on-about-section") +
        " " +
        (isDarkMode && "dark-mode")
      }
    >
      <div className="wrapper" ref={topbarRef}>
        <div className="left">
          <a href="#works" className="logo">
            Brian.
          </a>
          <div className="item-container">
            <Person className="icon" />
            <span>976-105-0239</span>
          </div>
          <div className="item-container">
            <Mail className="icon" />
            <span>201801166@iacademy.edu.ph</span>
          </div>
        </div>
        <div className="right">
          <div
            className={`darkmode-container ${isDarkMode && "dark-mode"}`}
            onClick={handleDarkMode}
          >
            <FaMoon />
            &nbsp; <span>Dark Mode</span>
          </div>
          <div className="hamburger" onClick={() => setMenu(!menuValue)}>
            <span className={`line1 ${isDarkMode && "dark-mode"}`}></span>
            <span className={`line2 ${isDarkMode && "dark-mode"}`}></span>
            <span className={`line3 ${isDarkMode && "dark-mode"}`}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
