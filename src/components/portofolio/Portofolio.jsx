import React from "react";
import { useEffect, useState } from "react";
import "./portofolio.scss";
import PortofolioList from "../portofolioList/PortofolioList";
import { sunnyside, mobilePortfolio } from "../../data";

const Portofolio = () => {
  const [selected, setSelected] = useState("sunnyside");
  const [data, setData] = useState(sunnyside);

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
      title: "Restaurant Menu",
      link: "google.com",
    },
    {
      id: "pomodoro",
      title: "Pomodoro Web App",
      link: "",
    },
    {
      id: "todo",
      title: "To-do App",
      link: "",
    },
    {
      id: "lorem",
      title: "Lorem Ipsum Generator",
      link: "",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "sunnyside":
        setData(sunnyside);
        break;
      case "restomenu":
        setData(mobilePortfolio);
        break;
      case "pomodoro":
        setData(sunnyside);
        break;
      case "todo":
        setData(mobilePortfolio);
        break;
      case "lorem":
        setData(sunnyside);
        break;

      default:
        setData(sunnyside);
    }
  }, [selected]);

  return (
    <div className="portofolio" id="portofolio">
      <h1>Portofolio</h1>
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
      <div className="container">
        {data.map((item) => {
          return (
            <div className="item" key={item.id}>
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portofolio;
