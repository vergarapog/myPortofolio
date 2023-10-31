import React from "react";
import { useEffect, useRef } from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import { gsap } from "gsap";
import { useGlobalContext } from "../../context";

const Topbar = ({ menuValue, setMenu }) => {
  const topbarRef = useRef();

  const { isNavDark } = useGlobalContext();

  useEffect(() => {
    gsap.from(topbarRef.current, {
      duration: 1,
      y: "-100%",
      ease: "bounce",
      delay: 3,
      opacity: 0,
    });
  }, []);

  return (
    <div
      className={
        "topbar " +
        (menuValue && "active") +
        " " +
        (isNavDark && "on-about-section")
      }
    >
      <div className="wrapper" ref={topbarRef}>
        <div className="left">
          <a href="#intro" className="logo">
            Brian.
          </a>
          <div className="item-container">
            <Person className="icon" />
            <span>976-105-0239</span>
          </div>
          <div className="item-container">
            <Mail className="icon" />
            <span>vbrian.dev@gmail.com</span>
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

export default Topbar;
