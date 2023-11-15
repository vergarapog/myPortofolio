import React from "react";
import "./menu.scss";
import { useGlobalContext } from "../../context";

const Menu = ({ menuValue, setMenu }) => {
  const { isDarkMode } = useGlobalContext();
  return (
    <div
      className={
        "menu " + (menuValue && "active") + " " + (isDarkMode && "dark-mode")
      }
    >
      <ul className={`${isDarkMode ? "dark-mode" : ""}`}>
        <li className="menu-item" onClick={() => setMenu(!menuValue)}>
          <a href="#intro">Home</a>
        </li>
        <li className="menu-item" onClick={() => setMenu(!menuValue)}>
          <a href="#portofolio">Portfolio</a>
        </li>
        <li className="menu-item" onClick={() => setMenu(!menuValue)}>
          <a href="#skills">About Me</a>
        </li>
        <li className="menu-item" onClick={() => setMenu(!menuValue)}>
          <a href="#contact">Contact</a>
        </li>
        <li className="menu-item" onClick={() => setMenu(!menuValue)}>
          <a
            href="https://drive.google.com/file/d/1kK8_ZKfcuBNWYDwF8tTw0Cn5Fe6Kdw8p/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="docu-links"
          >
            My Resume
          </a>
        </li>
        <li className="menu-item" onClick={() => setMenu(!menuValue)}>
          <a
            href="https://github.com/vergarapog"
            target="_blank"
            rel="noreferrer"
            className="docu-links"
          >
            My Github
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
