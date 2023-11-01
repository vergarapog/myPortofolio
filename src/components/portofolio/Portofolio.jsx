import React from "react";
import { useEffect, useRef } from "react";
import "./portofolio.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaVuejs,
  FaHtml5,
  FaSass,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import { projects } from "./ProjectsList";
import { useGlobalContext } from "../../context";

gsap.registerPlugin(ScrollTrigger);

const Portofolio = () => {
  const projectRefs = useRef([]);

  const { isDarkMode } = useGlobalContext();

  useEffect(() => {
    projectRefs.current.forEach((project, index) => {
      const internProj = gsap.timeline({
        defaults: { ease: "power2" },
        scrollTrigger: {
          trigger: project,
          start: "top 55%",
          end: "top 30%",
          // scrub: true,
        },
      });

      internProj
        .fromTo(
          project.querySelector(".proj-right"),
          {
            scale: 0.5,
            y: "100px",
            opacity: 0,
          },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 0.8,
          }
        )
        .fromTo(
          project.querySelector(".proj-num"),
          {
            x: "-10px",
            opacity: 0,
          },
          {
            x: "0",
            opacity: 1,
            duration: 0.4,
          }
        )
        .fromTo(
          project.querySelector(".proj-title"),
          {
            y: "30px",
            opacity: 0,
          },
          {
            y: "0",
            opacity: 1,
            duration: 0.3,
          },
          "<.01"
        )
        .fromTo(
          project.querySelector(".proj-container"),
          {
            y: "30px",
            opacity: 0,
          },
          {
            y: "0",
            opacity: 1,
            duration: 0.3,
          },
          "<.01"
        )
        .fromTo(
          project.querySelectorAll(".btn"),
          {
            y: "30px",
            opacity: 0,
          },
          {
            y: "0",
            opacity: 1,
            duration: 0.3,
            stagger: 0.1,
          },
          "<"
        )
        .fromTo(
          project.querySelectorAll(".proj-tech-item"),
          {
            x: "-5px",
            opacity: 0,
          },
          {
            x: "0",
            opacity: 1,
            duration: 0.3,
            stagger: 0.1,
          },
          1
        );
    });
  }, []);

  return (
    <div
      className={`portofolio ${isDarkMode ? "dark-mode" : ""}`}
      id="portofolio"
    >
      <h1 className={`gradient-text ${isDarkMode ? "dark-mode" : ""}`}>
        Projects
      </h1>

      {projects.map((project, index) => {
        return (
          <div
            className={`project ${index === 1 && "flex-reverse-row"}`}
            ref={(el) => (projectRefs.current[index] = el)}
            key={project.title}
          >
            <div className="proj-left">
              <h3 className="proj-num">
                No.
                <span className="proj-num-color">0{index + 1}</span>
              </h3>
              <h2 className="proj-title">{project.title}</h2>
              <div className="proj-container">
                <p className="proj-desc">{project.description}</p>
              </div>
              <div className="proj-btn-container">
                <a
                  href={project.links.website}
                  className="proj-btn btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                  &nbsp; Website
                </a>
                <a
                  href={project.links.github}
                  className="proj-btn btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  &nbsp; Github
                </a>
              </div>
              <ul className="proj-tech">
                <li className="proj-tech-item">
                  <span className="tech-logo">
                    <img src="assets/skills-svg/react-project.svg" alt="" />
                  </span>
                  &nbsp; <div className="">React</div>
                </li>
                <li className="proj-tech-item">
                  <span className="tech-logo">
                    <img src="assets/skills-svg/HTML5.svg" alt="" />
                  </span>
                  &nbsp; <div className="">HTML</div>
                </li>
                <li className="proj-tech-item">
                  <span className="tech-logo">
                    <img src="assets/skills-svg/tailwind.svg" alt="" />
                  </span>
                  &nbsp;<div className="">Tailwind</div>
                </li>
                {project.projectLanguage === "typescript" ? (
                  <li className="proj-tech-item">
                    <span className="tech-logo">
                      <img src="assets/skills-svg/typescript.svg" alt="" />
                    </span>
                    &nbsp;<div className="">TypeScript</div>
                  </li>
                ) : (
                  <li className="proj-tech-item">
                    <span className="tech-logo">
                      <img src="assets/skills-svg/javascript.svg" alt="" />
                    </span>
                    &nbsp;<div className="">JavaScript</div>
                  </li>
                )}
              </ul>
            </div>
            <div className="proj-right">
              <img src={project.imgSrc} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Portofolio;
