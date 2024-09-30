import React from "react";
import { Row } from "react-bootstrap";

import "./Service.css";

const Service = ({ mainHeading, title, description, img, className }) => {
  return (
    <div className={className}>
      <Row className="text-center text-lg-start">
        <h4 className="pb-4">{mainHeading}</h4>
      </Row>
      <Row>
        <div className="d-flex   gap-3">
          <img className="w-lg-20 w-xs-100" src={img} />
          <div className="d-flex flex-column">
            <h6 className="mt-2 fw-bold">{title}</h6>
            <p className=""> {description}</p>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Service;
