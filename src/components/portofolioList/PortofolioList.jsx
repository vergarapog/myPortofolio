import React from "react";
import "./portofolioList.scss";

const PortofolioList = ({ id, title, isActive, handleClick }) => {
  return (
    <li
      className={"portofolioList " + isActive}
      onClick={() => handleClick(id)}
    >
      {" "}
      {title}{" "}
    </li>
  );
};

export default PortofolioList;
