import React from "react";
import "./skills.scss";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGlobalContext } from "../../context";
import useElementOnScreen from "../../hooks/useElementOnScreen";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const { setIsNavDark } = useGlobalContext();

  const aboutMeRef = useRef(null);
  setIsNavDark(
    useElementOnScreen(
      {
        // root: null,
        rootMargin: "0px 0px -600px 0px",
        threshold: 0,
      },
      aboutMeRef
    )
  );

  useEffect(() => {
    //GSAP Internship animation
    const about = gsap.timeline({
      defaults: { ease: "power2" },
      scrollTrigger: {
        trigger: ".txt-container",
        // markers: true,
        start: "top 55%",
        end: "top 30%",
      },
    });

    about
      .fromTo(
        ".about-title",
        {
          // scale: 0.5,
          y: "30",
          opacity: 0,
        },
        {
          scale: 1,
          y: 0,

          opacity: 1,
          duration: 0.5,
        }
      )
      .fromTo(
        ".about-desc",
        {
          y: "30px",
          opacity: 0,
        },
        {
          y: "0",
          opacity: 1,
          duration: 0.5,
        },
        "<"
      )
      .fromTo(
        ".toolbox-title",
        {
          y: "30px",
          opacity: 0,
        },
        {
          y: "0",
          opacity: 1,
          duration: 0.3,
        },
        "<0.2"
      )
      .fromTo(
        ".card",
        {
          y: "30px",
          opacity: 0,
        },
        {
          y: "0",
          opacity: 1,
          duration: 0.2,
          stagger: 0.05,
        },
        "<0.1"
      );
  }, []);
  return (
    <div className="skills" id="skills" ref={aboutMeRef}>
      <div className="container">
        <div className="txt-container">
          <div className="svg-container">
            <img src="assets/person.svg" alt="" />
          </div>
          <h2 className="about-title">About Me</h2>

          <p className="about-desc">
            Passionate front-end developer dedicated to continuous learning. I'm
            deeply enthusiastic about JavaScript, React, and the ever-evolving
            world of web development. I embrace the blend of creativity and
            logic that fuels my excitement for crafting web solutions. Beyond
            coding, I enjoy gaming, working out, and hitting the open road with
            my motorcycle.
          </p>
        </div>

        <div className="skill-container">
          {/* <h2 className="toolbox-title">My Toolbox</h2> */}
          <section className="skills-grid">
            <div className="skill-row">
              <div className="card">
                <p>HTML</p>
                <img src="/assets/skills-svg/HTML5.svg" alt="" />
              </div>
              <div className="card">
                <p>CSS</p>
                <img src="/assets/skills-svg/css.svg" alt="" />
              </div>
              <div className="card">
                <p>Sass</p>
                <img src="/assets/skills-svg/sass.svg" alt="" />
              </div>
            </div>
            <div className="skill-row">
              <div className="card">
                <p>JavaScript</p>
                <img src="/assets/skills-svg/javascript.svg" alt="" />
              </div>
              <div className="card">
                <p>React</p>
                <img src="/assets/skills-svg/react.svg" alt="" />
              </div>
              <div className="card">
                <p>Vue</p>
                <img src="/assets/skills-svg/vue.svg" alt="" />
              </div>
              <div className="card">
                <p>Redux</p>
                <img src="/assets/skills-svg/redux.svg" alt="" />
              </div>
            </div>
            <div className="skill-row">
              <div className="card">
                <p>Git</p>
                <img src="/assets/skills-svg/git.svg" alt="" />
              </div>
              <div className="card">
                <p>Tailwind</p>
                <img src="/assets/skills-svg/tailwind.svg" alt="" />
              </div>
              <div className="card">
                <p>Vite</p>
                <img src="/assets/skills-svg/vite.svg" alt="" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
