import React from "react";
import Img from "../../assets/images/Vector 22 (1).svg";
import Btn from "../../Components/Button/Button";
import "./construction.css";

const Construction = ({ title, descritption, className, btnlabel }) => {
  return (
    <div className={className}>
      <div className="home-text">
        <div className="d-flex text-light">
          <img src={Img} />
          <h1 className="d-flex align-items-center px-3">{title}</h1>
        </div>
        <p className="py-3 text-light">{descritption}</p>
        <Btn
          label={btnlabel}
          style={{
            color: "white",
            backgroundColor: "#FFB400",
            fontWeight: "bold",
            border: "none",
          }}
        />
      </div>
    </div>
  );
};

export default Construction;
