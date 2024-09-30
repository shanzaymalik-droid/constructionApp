import React from "react";
import { Card } from "react-bootstrap";
import Img from "../../assets/images/Frame 13.svg";
import "./Testimonal.css";

const Testimonal = ({ cardTxt, cardName, className }) => {
  return (
    <Card className={className}>
      <Card.Body className="mx-2 my-0 text-center text-lg-start">
        <div className="d-flex align-items-center justify-content-center mt-2 mb-4">
          <img src={Img} />
        </div>
        <Card.Text className="fw-lighter">
          {cardTxt} <p className="fw-bold my-4">{cardName}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Testimonal;
