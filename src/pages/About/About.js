import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mynavbar from "../../Components/Mynavbar/Mynavbar";
import Construction from "../../Components/Construction/Construction";
import Service from "../../Components/ConstructionService/Service";
import img from "../../assets/images/Group 440.svg";
import Img3 from "../../assets/images/Group 441.svg";
import Img4 from "../../assets/images/Vector 24.svg";
import Img8 from "../../assets/images/Group 445 (2).svg";
import Btn from "../../Components/Button/Button";
import Img5 from "../../assets/images/Rectangle 33 (1).svg";
import ContactForm from "../../Components/ContactForm/ContactForm";
import "./About.css";

const About = () => {
  return (
    <>
      <Mynavbar />
      <Container fluid>
        <Row className="about-construction">
          <Col lg="8">
            <div className="construction-container">
              <div>
                <Construction
                  title="About Our Construction Company"
                  descritption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio."
                  className="main-contruction"
                  btnlabel="GET A FREE QUOTE"
                />
              </div>
            </div>
          </Col>
          <Col className=" py-5">
            <Row>
              <Service
                className="about-service"
                mainHeading="What We Do "
                title="Building Construction"
                description="Lorem ipsum dolor sit consectetur adipiscing elit."
                img={img}
              />
            </Row>
            <Row>
              <Service
                className="about-service"
                title="Building Repairs"
                description="Lorem ipsum dolor sit consectetur adipiscing elit."
                img={Img3}
              />
            </Row>
            <Row>
              <Service
                className="about-service"
                title="Custom Design"
                description="Lorem ipsum dolor sit consectetur adipiscing elit."
                img={img}
              />
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="my-4">
        <Row>
          <div className="d-flex flex-column align-items-center text-center text-lg-start ">
            <h1 className="fw-bold">About Divi Construction</h1>
            <img src={Img4} />
          </div>
        </Row>
        <Row className="fw-lighter my-4 text-md-start text-center">
          <Col md="6">
            <p>
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum. Nulla fermentum, metus quis sodales
              tristique, augue mauris molestie augue, non feugiat ligula neque
              nec felis. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Phasellus sed nibh dignissim, cursus tellus sit amet,
              ultrices mauris. Aliquam blandit est in eros elementum, quis
              vehicula est suscipit.
            </p>
          </Col>
          <Col md="6">
            <p>
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum. Nulla fermentum, metus quis sodales
              tristique, augue mauris molestie augue, non feugiat ligula neque
              nec felis. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Phasellus sed nibh dignissim, cursus tellus sit amet,
              ultrices mauris. Aliquam blandit est in eros elementum, quis
              vehicula est suscipit.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="m-0 p-0">
        <Row>
          <Col lg="4" className=" m-0 p-0">
            <div className=" d-flex flex-column align-items-center">
              <div className="p-4">
                <Service
                  className="home-service"
                  title="Eco Friendly Construction "
                  description="Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. "
                  img={Img8}
                />
                <Service
                  className="home-service"
                  title="Eco Friendly Construction "
                  description="Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. "
                  img={Img8}
                />
                <Service
                  className="home-service"
                  title="Eco Friendly Construction "
                  description="Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. "
                  img={Img8}
                />
              </div>
              <div>
                <Btn label="FREE QUOTE" classname="about-quote-btn" />
              </div>
            </div>
          </Col>
          <Col className="m-0 p-0">
            <Row>
              <img className="w-100" src={Img5} />
            </Row>
            <Row>
              <div className="d-flex flex-column flex-md-row custom-cols text-center align-items-end ">
                <div className="custom-col1">
                  <p className="mb-0">12</p>
                  <p>YEARS ESTABLISHED</p>
                </div>
                <div className="custom-col2">
                  <p className="mb-0">250</p>
                  <p>COMPLETED PROJECTS</p>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row custom-cols2 text-center align-items-end ">
                <div className="custom-col3">
                  <p className="mb-0">12</p>
                  <p>YEARS ESTABLISHED</p>
                </div>
                <div className="custom-col4">
                  <p className="mb-0">250</p>
                  <p>COMPLETED PROJECTS</p>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="custom-quote py-3">
        <div className=" text-center ceo-quote">
          <h5 className="lh-base">
            “Suspendisse neque erat, imperdiet ac non, sollicitudin accumsan
            lacus. Vestibulum ac ex rutrum, pellentesque purus et, lacinia mi.
            Nullam maximus lectus libero.”
          </h5>
          <p className="text-muted pt-3">JOHN SMITH-CEO</p>
        </div>
      </Container>
      <Container fluid>
        <ContactForm />
      </Container>
    </>
  );
};
export default About;
