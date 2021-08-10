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
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setMenu(!menuValue)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setMenu(!menuValue)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default menu;
