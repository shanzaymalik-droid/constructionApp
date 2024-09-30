import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mynavbar from "../../Components/Mynavbar/Mynavbar";
import Construction from "../../Components/Construction/Construction";
import Service from "../../Components/ConstructionService/Service";
import img from "../../assets/images/Group 433 (1).svg";
import Img2 from "../../assets/images/Group 429.svg";
import Img3 from "../../assets/images/Group 434 (1).svg";
import CustomCol from "../../Components/CustomCol/CustomCol";
import ServicesProject from "../../Components/ServicesProject/ServicesProject";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import Btn from "../../Components/Button/Button";
import CardImg1 from "../../assets/images/Rectangle 14 (2).svg";
import CardImg2 from "../../assets/images/Rectangle 38 (1).svg";
import CardImg3 from "../../assets/images/Rectangle 37.svg";
import Img6 from "../../assets/images/Vector 1.svg";
import ContactForm from "../../Components/ContactForm/ContactForm";
import "./Services.css";
const Services = () => {
  return (
    <>
      <Mynavbar />
      <Container fluid>
        <Row className="service-construction">
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
                img={Img2}
              />
            </Row>
            <Row>
              <Service
                className="about-service"
                title="Custom Design"
                description="Lorem ipsum dolor sit consectetur adipiscing elit."
                img={Img3}
              />
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="">
        <CustomCol
          className="services-quote"
          subClass1="contact-col4"
          subClass2="contact-col5"
          title1="Get a Quote For Your Project"
          btnClass="custom-contact-btn"
          btnLabel="FREE QUOTE"
        />
      </div>
      <Container fluid>
        <Row>
          <Col lg="2"></Col>
          <Col>
            <ServicesProject title="Building Construction" />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <ServicesProject title="Repairs & Installations" />
          </Col>
          <Col lg="2"></Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col lg="2"></Col>
          <Col>
            <ServicesProject title="Custom Design Projects" />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="fw-bold">Latest Projects</h1>
          <img className="my-3" src={Img6} />
        </div>
        <Row className="my-2 d-flex align-items-center align-items-lg-start  justify-content-center justify-content-lg-start ">
          <Col
            lg="4"
            className="my-2 d-flex align-items-center justify-content-center"
          >
            <ProjectCard
              image={CardImg1}
              cardTittle="Service Title"
              cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas. "
              btnLabel="LEARN MORE"
            />
          </Col>
          <Col
            lg="4"
            className="my-2 d-flex align-items-center justify-content-center"
          >
            <ProjectCard
              image={CardImg2}
              cardTittle="Service Title"
              cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas. "
              btnLabel="LEARN MORE"
            />
          </Col>
          <Col
            lg="4"
            className="my-2 d-flex align-items-center justify-content-center"
          >
            <ProjectCard
              image={CardImg3}
              cardTittle="Service Title"
              cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas. "
              btnLabel="LEARN MORE"
            />
          </Col>
        </Row>
        <div className="d-flex align-items-center justify-content-center mb-5">
          <Btn
            label="VIEW ALL"
            style={{
              backgroundColor: "white",
              fontWeight: "bold",
              fontSize: "12px",
              border: "2px solid black",
              padding: "7px 30px",
            }}
          />
        </div>
      </Container>
      <Container fluid>
        <ContactForm />
      </Container>
    </>
  );
};
export default Services;
