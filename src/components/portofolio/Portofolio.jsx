import React from "react";
import { useEffect, useState } from "react";
import "./portofolio.scss";
import PortofolioList from "../portofolioList/PortofolioList";
import { webPortfolio, mobilePortfolio } from "../../data";

const Portofolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState(webPortfolio);

  const handleClick = (id) => {
    setSelected(id);
  };

  const list = [
    {
      id: "web",
      title: "Web Applications",
    },
    {
      id: "mobile",
      title: "Mobile Responsive View",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;

      default:
        setData(webPortfolio);
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
