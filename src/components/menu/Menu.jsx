import React from "react";
import "./menu.scss";

const menu = ({ menuValue, setMenu }) => {
  return (
    <div className={"menu " + (menuValue && "active")}>
      <ul>
        <li onClick={() => setMenu(!menuValue)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenu(!menuValue)}>
          <a href="#portofolio">Portofolio</a>
        </li>
        <li onClick={() => setMenu(!menuValue)}>
          <a href="#skills">About Me</a>
        </li>
        <li onClick={() => setMenu(!menuValue)}>
          <a href="#contact">Contact</a>
        </li>
        <li onClick={() => setMenu(!menuValue)}>
          <a href="https://github.com/vergarapog/myPortofolio" target="_blank">
            My Website's Code
          </a>
        </li>
      </ul>
    </div>
  );
};

export default menu;
