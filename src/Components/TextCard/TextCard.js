import React from "react";
import { Card } from "react-bootstrap";
import Img from "../../assets/images/Vector 1.svg";
import Btn from "../../Components/Button/Button";
import "./TextCard.css";
const TextCard = ({ title, text, label, className }) => {
  return (
    <Card className={className} style={{ width: "100%" }}>
      <Card.Body className="d-flex flex-column align-items-lg-start align-items-center justify-content-center text-center text-lg-start rounded-0">
        <Card.Title>
          <h2 className="fw-bold">{title}</h2>
        </Card.Title>
        <img src={Img} />
        <Card.Text className="my-2 fw-lighter">{text}</Card.Text>
        <ul className="fw-lighter">
          <li>A tortor ultrices bibendum</li>
          <li>A tortor ultrices bibendum</li>{" "}
          <li>A tortor ultrices bibendum</li>{" "}
          <li>A tortor ultrices bibendum</li>
        </ul>
        <Btn
          label={label}
          style={{
            color: "#FFB400",
            backgroundColor: "transparent",
            fontWeight: "bold",
            border: "3px solid #FFB400",
            padding: "7px 30px",
          }}
        />
      </Card.Body>
    </Card>
  );
};
export default TextCard;
