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
          <a href="https://github.com/vergarapog/myPortofolio" target="_blank">
            My Website's Code
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
