import React from "react";
import { Accordion } from "react-bootstrap";
import "./Question.css";

const Question = ({
  header1,
  body1,
  header2,
  body2,
  header3,
  body3,
  header4,
  body4,
  header5,
  body5,
}) => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{header1}</Accordion.Header>
        <Accordion.Body>{body1}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>{header2}</Accordion.Header>
        <Accordion.Body className="">{body2}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>{header3}</Accordion.Header>
        <Accordion.Body>{body3}</Accordion.Body>
      </Accordion.Item>{" "}
      <Accordion.Item eventKey="3">
        <Accordion.Header>{header4}</Accordion.Header>
        <Accordion.Body>{body4}</Accordion.Body>
      </Accordion.Item>{" "}
      <Accordion.Item eventKey="4">
        <Accordion.Header>{header5}</Accordion.Header>
        <Accordion.Body>{body5}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Question;
