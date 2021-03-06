import React from "react"
import { useEffect, useState, useRef } from "react"
import "./portofolio.scss"
import PortofolioList from "../portofolioList/PortofolioList"
import { sunnyside, restomenu, pomodoro, agency } from "../../data"
import { gsap, Power3 } from "gsap"

const Portofolio = () => {
  const [selected, setSelected] = useState("agency")
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
  }, [selected])

  const list = [
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

      default:
        setData(sunnyside)
    }
  }, [selected])

  return (
    <div className="portofolio" id="portofolio">
      <h1 className="gradient-text">Portfolio</h1>
      <div className="box moving-glow">
        <div className="border-wrapper">
          <ul>
            {list.map((item) => {
              if (item.id === selected) {
                return (
                  <PortofolioList
                    id={item.id}
                    title={item.title}
                    isActive="active"
                    handleClick={handleClick}
                  />
                )
              }
              return (
                <PortofolioList
                  id={item.id}
                  title={item.title}
                  handleClick={handleClick}
                />
              )
            })}
          </ul>
        </div>
      </div>

      <div className="link-containers" ref={refBtns}>
        <a href={activeLink} target="_blank">
          {btnData}'s website
        </a>
        <a href={githubLink} target="_blank">
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
  )
}

export default Portofolio
