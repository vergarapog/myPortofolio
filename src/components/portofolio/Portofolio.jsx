import React from "react"
import { useEffect, useState, useRef } from "react"
import "./portofolio.scss"
import PortofolioList from "../portofolioList/PortofolioList"

import { sunnyside, restomenu, pomodoro, agency, bootfront } from "../../data"
import { gsap, Power3 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  FaGithub,
  FaExternalLinkAlt,
  FaVuejs,
  FaHtml5,
  FaSass,
} from "react-icons/fa"
import { SiJavascript } from "react-icons/si"

gsap.registerPlugin(ScrollTrigger)

const Portofolio = () => {
  const [selected, setSelected] = useState("bootfront")
  const [data, setData] = useState(agency)
  const [activeLink, setActiveLink] = useState(
    "https://agency1234.netlify.app/"
  )
  const [githubLink, setGithubLink] = useState(
    "https://github.com/vergarapog/client-website-concept"
  )
  const [btnData, setBtnData] = useState("Sunnyside")

  const handleClick = (id) => {
    setSelected(id)
  }

  let refBtns = useRef()
  let refPics = useRef()

  useEffect(() => {
    gsap.fromTo(
      refPics.current,
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        duration: 2,
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        ease: Power3.easeInOut,
      }
    )
    gsap.fromTo(
      refBtns.current,
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        duration: 0.7,
        autoAlpha: 1,
        y: 0,
        ease: Power3.easeInOut,
      }
    )
    gsap.fromTo(
      ".item",
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        duration: 0.3,
        autoAlpha: 1,
        y: 0,
        stagger: 0.3,
        ease: Power3.easeInOut,
      }
    )
  }, [selected])

  const list = [
    {
      id: "bootfront",
      title: "BootFront Site",
      link: "",
    },
    {
      id: "agency",
      title: "Theoretical Client Site",
      link: "",
    },
    {
      id: "sunnyside",
      title: "Sunnyside Landing Page",
      link: "youtube.com",
    },
    {
      id: "restomenu",
      title: "Jolibee Favorites",
      link: "google.com",
    },
    {
      id: "pomodoro",
      title: "Pomodoro Web App",
      link: "",
    },
  ]

  useEffect(() => {
    switch (selected) {
      case "sunnyside":
        setData(sunnyside)
        setActiveLink("https://sunnysideinc.netlify.app/")
        setGithubLink("https://github.com/vergarapog/sunnyside-challenge")
        setBtnData("Sunnyside")

        break
      case "agency":
        setData(agency)
        setActiveLink("https://agency1234.netlify.app/")
        setGithubLink("https://github.com/vergarapog/client-website-concept")
        setBtnData("Agency")

        break
      case "restomenu":
        setData(restomenu)
        setActiveLink("https://jabeefavs.netlify.app/")
        setGithubLink("https://github.com/vergarapog/RestaurantMenu-ReactJS")
        setBtnData("Jolibee fav")

        break
      case "pomodoro":
        setData(pomodoro)
        setActiveLink("https://pomodoro-todo.netlify.app/")
        setGithubLink("https://github.com/vergarapog/pomo-todo")
        setBtnData("Pomodoro")

        break
      case "bootfront":
        setData(bootfront)
        setActiveLink("https://bootfront.netlify.app/")
        setGithubLink("https://github.com/vergarapog/bootcamp")
        setBtnData("BootFront")

        break

      default:
        setData(sunnyside)
    }
  }, [selected])

  useEffect(() => {
    //GSAP Internship animation
    const internProj = gsap.timeline({
      defaults: { ease: "power2" },
      scrollTrigger: {
        trigger: ".internship-proj",
        // markers: true,
        start: "top 55%",
        end: "top 30%",
      },
    })

    internProj

      .fromTo(
        ".intern-proj-right",
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
        ".intern-proj-num",
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
        ".intern-proj-title",
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
        ".proj-container",
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
        ".intern-btn",
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
        ".proj-tech-item",
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
        2
      )
  }, [])

  return (
    <div className="portofolio" id="portofolio">
      <h1 className="gradient-text">Internship Projects</h1>

      <div className="internship-proj">
        <div className="intern-proj-left">
          <h3 className="intern-proj-num">
            No.
            <span className="intern-proj-num-color">01</span>
          </h3>
          <h2 className="intern-proj-title">CSS Animations Generator</h2>
          <div className="proj-container">
            <p className="intern-proj-desc">
              My main goal on this internship was to create a web application
              wherein the user can experiment with a bunch of animations and
              then generate their corresponding CSS code, which the designers
              and developers at my Internship company could use and reference in
              development.
            </p>
          </div>
          <div className="intern-proj-btn-container">
            <p
              href="https://vue-css-animations.netlify.app/"
              className="intern-proj-btn intern-btn"
              target="_blank"
            >
              <FaExternalLinkAlt />
              &nbsp; Website (Private)
            </p>
            <p href="" className="intern-proj-btn intern-btn" target="_blank">
              <FaGithub />
              &nbsp; Repo (Private)
            </p>
          </div>
          <ul className="intern-proj-tech">
            <li className="proj-tech-item">
              <span className="tech-logo">
                {" "}
                <FaVuejs />
              </span>
              &nbsp; <div className="">Vue</div>
            </li>
            <li className="proj-tech-item">
              <span className="tech-logo">
                <FaHtml5 />
              </span>
              &nbsp; <div className="">HTML</div>
            </li>
            <li className="proj-tech-item">
              <span className="tech-logo">
                <FaSass />
              </span>
              &nbsp;<div className="">SASS</div>
            </li>
            <li className="proj-tech-item">
              <span className="tech-logo">
                <SiJavascript />
              </span>
              &nbsp;<div className="">JavaScript</div>
            </li>
          </ul>
        </div>
        <div className="intern-proj-right">
          <img src="/assets/intern-projects/portfolioPic.png" alt="" />
        </div>
      </div>
      <div className="personal-projects">
        <h1 className="gradient-text">Personal Projects</h1>
        <div className="box moving-glow">
          <div className="border-wrapper">
            <ul className="project-list">
              {list.map((item) => {
                if (item.id === selected) {
                  return (
                    <PortofolioList
                      id={item.id}
                      title={item.title}
                      isActive="active"
                      handleClick={handleClick}
                      key={item.id}
                    />
                  )
                }
                return (
                  <PortofolioList
                    id={item.id}
                    title={item.title}
                    handleClick={handleClick}
                    key={item.id}
                  />
                )
              })}
            </ul>
          </div>
        </div>
        <div className="link-containers" ref={refBtns}>
          <a href={activeLink} target="_blank">
            <FaExternalLinkAlt />
            &nbsp;
            {btnData}'s site
          </a>
          <a href={githubLink} target="_blank">
            <FaGithub />
            &nbsp;
            {btnData}'s code
          </a>
        </div>

        <div className="container" ref={refPics}>
          {data.map((item) => {
            return (
              <div>
                <div className="item" key={item.id}>
                  <img src={item.img} alt="" />
                  <h3>{item.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Portofolio
