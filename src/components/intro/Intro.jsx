import React from "react";
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1000,
      showCursor: true,
      strings: ["Aspiring", "Ambitious", "Motivated", "Commited"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/frontend.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Brian Vergara</h1>
          <h3>
            <span ref={textRef}></span> Front-End Engineer
          </h3>
          <div className="resume-wrapper">
            <div>
              <a href="https://github.com/vergarapog">My Github</a>
            </div>
            <div>
              <a
                className="creative"
                href="https://drive.google.com/file/d/1ALuBvXSNvXqmq_M8QAcquCq1k4veak7Y/view?usp=sharing"
              >
                My Resume
              </a>
            </div>
          </div>
        </div>

        <a className="bottom" href="#portofolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
