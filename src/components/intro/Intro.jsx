import React from "react";
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { SvgIcon } from "@material-ui/core";

import { gsap, Power3 } from "gsap";

const Intro = () => {
  const textRef = useRef();
  const container = useRef(null);

  let button = useRef();
  let button2 = useRef();

  let circle = useRef();
  let titleRef = useRef();
  let nameRef = useRef();
  let jobRef = useRef();

  console.log(container);
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
    gsap.fromTo(
      container.current,
      {
        autoAlpha: 0,
      },
      {
        duration: 2,
        autoAlpha: 1,
        ease: Power3.easeInOut,
      }
    );
    gsap.fromTo(
      titleRef.current,
      {
        autoAlpha: 0,
        y: -150,
      },
      {
        duration: 2,
        autoAlpha: 1,
        y: 0,
        ease: Power3.easeInOut,
      }
    );
    gsap.fromTo(
      nameRef.current,
      {
        autoAlpha: 0,
        x: 150,
      },
      {
        duration: 2,
        autoAlpha: 1,
        x: 0,
        ease: Power3.easeInOut,
      }
    );
    gsap.fromTo(
      jobRef.current,
      {
        autoAlpha: 0,
      },
      {
        duration: 2,
        autoAlpha: 1,
        ease: Power3.easeInOut,
      }
    );
    gsap.fromTo(
      circle.current,
      {
        autoAlpha: 0,
        y: 50,
      },
      {
        duration: 2,
        autoAlpha: 1,
        y: 0,

        ease: Power3.easeInOut,
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      button.current,
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        duration: 2,
        autoAlpha: 1,
        y: 0,
        ease: Power3.easeInOut,
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      button2.current,
      {
        autoAlpha: 0,
        y: 60,
      },
      {
        duration: 2,
        autoAlpha: 1,
        y: 0,
        ease: Power3.easeInOut,
      }
    );
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer" ref={circle}>
          {/* <img src="assets/frontend.png" alt="" /> */}
          <div className="container" ref={container}></div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2 ref={titleRef}>Hi There, I'm</h2>
          <h1 ref={nameRef}>Brian Vergara</h1>
          <h3 ref={jobRef}>
            <span ref={textRef}></span> Front-End Engineer
          </h3>
          <div className="resume-wrapper">
            <div className="link-container">
              <a
                href="https://github.com/vergarapog"
                target="_blank"
                ref={button}
              >
                My Github
              </a>
            </div>
            <div className="link-container">
              <a
                className="creative"
                href="https://drive.google.com/file/d/1zLueu5hHmAMwzw0aDiRSBPLtNHEit6Qb/view?usp=sharing"
                target="_blank"
                ref={button2}
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
