import React from "react"
import "./skills.scss"
import { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {
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
    })

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
          duration: 0.8,
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
          duration: 0.8,
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
        }
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
          stagger: 0.1,
        }
      )
  }, [])
  return (
    <div className="skills" id="skills">
      <div className="container">
        <div className="txt-container">
          <h2 className="about-title">About Me</h2>

          <p className="about-desc">
            I am a 4th year student currently enrolled at iAcademy. I really
            like to code things from scratch, and enjoy bringing ideas to life
            in the browser. Career-wise, I aspire to be a front-end developer.
          </p>
        </div>
        <h2 className="toolbox-title">My Toolbox</h2>

        <section className="skills-grid">
          <div className="card">
            <p>HTML</p>
            <img src="/assets/skills/html.png" alt="" />
          </div>
          <div className="card">
            <p>CSS</p>
            <img src="/assets/skills/css.png" alt="" />
          </div>
          <div className="card">
            <p>Sass</p>
            <img src="/assets/skills/sass.png" alt="" />
          </div>
          <div className="card">
            <p>JavaScript</p>
            <img src="/assets/skills/js.png" alt="" />
          </div>
          <div className="card">
            <p>ReactJS</p>
            <img src="/assets/skills/react.png" alt="" />
          </div>
          <div className="card">
            <p>Github</p>
            <img src="/assets/skills/github.png" alt="" />
          </div>
          <div className="card">
            <p>NPM</p>
            <img src="/assets/skills/npm.png" alt="" />
          </div>
          <div className="card">
            <p>VS Code</p>
            <img src="/assets/skills/vscode.png" alt="" />
          </div>
          <div className="card">
            <p>Vue.js</p>
            <img src="/assets/skills/vue.png" alt="" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Testimonials
