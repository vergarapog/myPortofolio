import React from "react";
import { useEffect, useState } from "react";
import "./portofolio.scss";
import PortofolioList from "../portofolioList/PortofolioList";
import { sunnyside, restomenu, pomodoro } from "../../data";

const Portofolio = () => {
  const [selected, setSelected] = useState("sunnyside");
  const [data, setData] = useState(sunnyside);
  const [activeLink, setActiveLink] = useState(
    "https://sunnysideinc.netlify.app/"
  );
  const [githubLink, setGithubLink] = useState(
    "https://github.com/vergarapog/sunnyside-challenge"
  );
  const [btnData, setBtnData] = useState("Sunnyside");

  const handleClick = (id) => {
    setSelected(id);
  };

  const list = [
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
  ];

  useEffect(() => {
    switch (selected) {
      case "sunnyside":
        setData(sunnyside);
        setActiveLink("https://sunnysideinc.netlify.app/");
        setGithubLink("https://github.com/vergarapog/sunnyside-challenge");
        setBtnData("Sunnyside");

        break;
      case "restomenu":
        setData(restomenu);
        setActiveLink("https://jabeefavs.netlify.app/");
        setGithubLink("https://github.com/vergarapog/RestaurantMenu-ReactJS");
        setBtnData("Jolibee fav");

        break;
      case "pomodoro":
        setData(pomodoro);
        setActiveLink("https://pomodoro-todo.netlify.app/");
        setGithubLink("https://github.com/vergarapog/pomo-todo");
        setBtnData("Pomodoro");

        break;

      default:
        setData(sunnyside);
    }
  }, [selected]);

  return (
    <div className="portofolio" id="portofolio">
      <h1>Portfolio</h1>
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
            );
          }
          return (
            <PortofolioList
              id={item.id}
              title={item.title}
              handleClick={handleClick}
            />
          );
        })}
      </ul>
      __________________________________________
      <div className="link-containers">
        <a href={activeLink} target="_blank">
          {btnData}'s website
        </a>
        <a href={githubLink} target="_blank">
          {btnData}'s code
        </a>
      </div>
      <div className="container">
        {data.map((item) => {
          return (
            <div>
              <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portofolio;
