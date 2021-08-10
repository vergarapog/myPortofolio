import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

const topbar = ({ menuValue, setMenu }) => {
  return (
    <div className={"topbar " + (menuValue && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#works" className="logo">
            hotdog.
          </a>
          <div className="item-container">
            <Person className="icon" />
            <span>917-499-0930</span>
          </div>
          <div className="item-container">
            <Mail className="icon" />
            <span>201801166@iacademy.edu.ph</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenu(!menuValue)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default topbar;
