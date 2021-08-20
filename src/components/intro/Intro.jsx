import React from "react";
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { SvgIcon } from "@material-ui/core";

const Intro = () => {
  const textRef = useRef();
  const container = useRef(null);

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1000,
      showCursor: true,
      strings: ["Aspiring", "Ambitious", "Motivated", "Commited"],
    });
  }, []);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../lottieanimations/intro.json"),
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          {/* <img src="assets/frontend.png" alt="" /> */}
          <div className="container" ref={container}></div>
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
              <a href="https://github.com/vergarapog" target="_blank">
                My Github
              </a>
            </div>
            <div>
              <a
                className="creative"
                href="https://drive.google.com/file/d/1zLueu5hHmAMwzw0aDiRSBPLtNHEit6Qb/view?usp=sharing"
                target="_blank"
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
