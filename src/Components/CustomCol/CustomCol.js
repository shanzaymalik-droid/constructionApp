import React from "react";
import { Row, Col } from "react-bootstrap";
import Btn from "../../Components/Button/Button";
import "./CustomCol.css";
const CustomCol = ({
  className,
  subClass1,
  subClass2,
  title1,
  text1,
  btnLabel,
  btnClass,
}) => {
  return (
    <Row className={className}>
      <Col xs="12" lg="6" className="m-0 p-0">
        <div className={subClass1}>
          <h4 className="fw-bold mb-0">{title1}</h4>
          <p>{text1}</p>
        </div>
      </Col>
      <Col xs="12" lg="6" className="m-0 p-0">
        <div className={subClass2}>
          <Btn classname={btnClass} label={btnLabel} />
        </div>
      </Col>
    </Row>
  );
};

export default CustomCol;
