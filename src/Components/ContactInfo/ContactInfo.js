import React from "react";
import { Row } from "react-bootstrap";

const ContactInfo = ({ title, description1, description2 }) => {
  return (
    <div>
      <Row>
        <div className="d-flex flex-column">
          <h6 className="mt-2 fw-bold">{title}</h6>
          <p className="m-0 "> {description1}</p>
          <p> {description2}</p>
        </div>
      </Row>
    </div>
  );
};
export default ContactInfo;
