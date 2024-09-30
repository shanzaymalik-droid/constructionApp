import React from "react";
import { Card, } from "react-bootstrap";
import Btn from "../Button/Button";
import "./ProjectCard.css";
const ProjectCard = ({ image, cardTittle, cardText, btnLabel }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="fw-bold my-4">{cardTittle}</Card.Title>
        <Card.Text className="fw-light lh-lg">{cardText}</Card.Text>
        <div className="mt-4 mb-1">
          <Btn
            label={btnLabel}
            style={{
              color: "#666666",
              backgroundColor: "white",
              fontWeight: "bold",
              fontSize: "12px",
              border: "1px solid #666666",
              padding: "7px 20px",
            }}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
