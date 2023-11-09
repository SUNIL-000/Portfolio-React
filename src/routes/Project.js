import React from "react";
import ecommerce from "../assest/ecommerces.png";
import taskmanager from "../assest/task_manager.png";
import portfolio from "../assest/portfolio.jpg";
import youtube from "../assest/youtube.png";
import { Link } from "react-router-dom";
// import { FaLink } from "react-icons/fa";

import "./Project.css";

const Project = () => {
  const data = [
    {
      imgsrc: youtube,
      pname: "youtube clone",
    },
    {
      imgsrc: portfolio,
      pname: "portfolio",
    },
    {
      imgsrc: ecommerce,
      pname: "e-commerce store",
    },

    {
      imgsrc: taskmanager,
      pname: "task manager",
    },
  ];
  return (
    <>
      <div className="maindiv">
        {data.map((item, index) => {
          return (
            <Link to={"#"} className="linkdiv" key={index}>
              <div className="imgdiv">
                <img src={item.imgsrc} className="img" alt={item.pname} />

                <h2>{item.pname}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Project;
