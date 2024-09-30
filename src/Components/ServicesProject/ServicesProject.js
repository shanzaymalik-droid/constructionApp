import React from "react";
import Img from "../../assets/images/Vector 1.svg";
import Btn from "../../Components/Button/Button";
import "./ServicesProject.css";

const ServicesProject = ({ title }) => {
  return (
    <div className=" ServicesProject d-flex flex-column mt-2 mb-3 ">
      <div className="p-5">
        <div className="d-flex flex-column align-items-start ">
          <h3 className="fw-bold"> {title}</h3>
          <img className="my-2" src={Img} />
        </div>
        <div className="mt-2">
          <p className="m-0">
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum.{" "}
          </p>
        </div>
        <div className="d-lg-flex gap-2 my-4">
          <div>
            <li>Lectus erat consectetur</li>
            <li>Rhoncus consectetur</li>
            <li>Rhoncus consectetur</li>
            <li>Proin cursus</li>
            <li>Dolor a mollis consectetur</li>
          </div>
          <div>
            <li>Lectus erat consectetur</li>
            <li>Rhoncus consectetur</li>
            <li>Rhoncus consectetur</li>
            <li>Proin cursus</li>
            <li>Dolor a mollis consectetur</li>
          </div>
          <div>
            <li>Lectus erat consectetur</li>
            <li>Rhoncus consectetur</li>
            <li>Rhoncus consectetur</li>
            <li>Proin cursus</li>
            <li>Dolor a mollis consectetur</li>
          </div>
        </div>
      </div>
      <div className="d--lg-flex py-3 ">
        <div className="w-100 d-flex justify-content-center btn-wrapper1">
          <Btn label="GET A QUOTE" classname="project-btn" />
        </div>
        <div className="w-100 d-flex align-items-center justify-content-center btn-wrapper2 ">
          <Btn label="LEARN MORE" classname="project-btn" />
        </div>
      </div>
    </div>
  );
};

export default ServicesProject;
