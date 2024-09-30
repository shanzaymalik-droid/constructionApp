import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Btn from "../../Components/Button/Button";
import Mynav from "../../Components/Mynavbar/Mynavbar";
import Construction from "../../Components/Construction/Construction";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import Img4 from "../../assets/images/facebook (2).svg";
import Img5 from "../../assets/images/linkedin (1).svg";
import Img6 from "../../assets/images/twitter (2).svg";
import CustomCol from "../../Components/CustomCol/CustomCol";
import Questions from "../../Components/Question/Question";
import Img7 from "../../assets/images/Vector 6.svg";
import Img8 from "../../assets/images/Map (1).svg";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Mynav />
      <Container fluid>
        <Row>
          <Col lg="9" className="bg">
            <div className="construction-container">
              <div>
                <Construction
                  title="CONTACT US"
                  descritption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio."
                  className="main-contruction"
                  btnlabel="SEND A MESSAGE"
                />
              </div>
            </div>
          </Col>
          <Col lg="3" className="contact-info ">
            <div className="d-flex flex-column justify-content-center  align-items-center align-items-lg-start p-3">
              <h4 className="fw-bold my-3">CONTACT INFO</h4>
              <ContactInfo
                title="OUR OFFICE"
                description1="1234 Divi St. #1000, San Francisc,"
                description2=" CA 93251"
              />
              <ContactInfo
                title="Open Office Hours"
                description1="M-F: 9am – 6pm "
                description2="S-S: 10am – 4pm"
              />
              <ContactInfo
                title="Get in Touch"
                description1="constructioninc.com
"
                description2="(346) 426-2351"
              />
              <div className="d-flex gap-4 my-5">
                <img src={Img4} />
                <img src={Img5} /> <img src={Img6} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <CustomCol
          className="quote"
          subClass1="contact-col1"
          subClass2="contact-col2"
          title1="Call: (541) 931-3526"
          text1="We Can’t Wait to Make Your Ideas a Reality"
          btnClass="custom-contact-btn"
          btnLabel="ONLINE ESTIMATE FORM"
        />
      </div>
      <Container className="my-3 ">
        <Row className="">
          <Col lg="6" className=" ">
            <div className="py-4 ">
              <div className="d-flex flex-column align-items-start">
                <h3 className="fw-bold">Contact Us</h3>
                <img src={Img7} />
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
                <Form.Group
                  className=""
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    className="border-0 rounded-0"
                    placeholder="Message"
                    rows={5}
                  />
                </Form.Group>
              </Form>
              <Btn label="SEND MESSAGE" classname="contactBtn2" />
            </div>
          </Col>
          <Col lg="6" className="mt-5">
            <Questions
              header1="Donec rutrum congue leo eget malesuada?"
              body1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. "
              header2="Vivamus suscipit tortor eget felis porttitor volutpat?"
              body2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. "
              header3="Curabitur non nulla sit amet nisl tempus?"
              body3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. "
              header4="Pellentesque in ipsum id orci porta dapibus?"
              body4="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. "
              header5="Curabitur non nulla sit amet nisl?"
              body5="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. "
            />
          </Col>
        </Row>
      </Container>
      <img className="w-100" src={Img8} />
    </>
  );
};

export default Contact;
