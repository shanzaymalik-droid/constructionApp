import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import Img from "../../assets/images/Vector 6.svg";
import "./ContactForm.css";
import Btn from "../../Components/Button/Button";
import Icon1 from "../../assets/images/facebook (1).svg";
import Icon2 from "../../assets/images/linkedin.svg";
import Icon3 from "../../assets/images/twitter (1).svg";
import Img1 from "../../assets/images/Subtract (3).svg";
import Img2 from "../../assets/images/phone (1).svg";
import Img3 from "../../assets/images/mail.svg";

const ContactForm = () => {
  return (
    <Row>
      <Col lg="6" className="contact-container m-0 p-0 ">
        <div className="py-4 m-4">
          <div className="d-flex flex-column align-items-start">
            <h3 className="fw-bold">Contact Us</h3>
            <img src={Img} />
          </div>
          <Form className="my-4">
            <Form.Group
              className="mb-3 d-flex gap-4 "
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                className="border-0 rounded-0"
                type="text"
                placeholder="Name"
              />
              <Form.Control
                className="border-0 rounded-0"
                type="Email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group className="" controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                className="border-0 rounded-0"
                placeholder="Message"
                rows={5}
              />
            </Form.Group>
          </Form>
          <Btn label="SEND MESSAGE" classname="contactBtn" />
        </div>
      </Col>
      <Col lg="6" className="m-0 p-0">
        <div className="d-flex flex-column ">
          <div className=" icons d-flex align-items-center gap-5 justify-content-center py-5">
            <img src={Icon1} />
            <img src={Icon2} />
            <img src={Icon3} />
          </div>
          <div></div>
        </div>
        <div className="d-flex flex-column  justify-content-center align-items-start text-lg-start text-center my-5 px-5 ">
          <div className="d-flex  gap-2">
            <img src={Img1} />
            <h6 className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h6>
          </div>
          <div className="d-flex   gap-2">
            <img src={Img2} />
            <h6 className="mb-0 fw-bold">+00 123 456 78</h6>
          </div>
          <div className="d-flex   gap-2">
            <img src={Img3} />
            <h6 className="mb-0">constractioninc@gmail.com</h6>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ContactForm;
