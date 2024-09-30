import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mynavbar from "../../Components/Mynavbar/Mynavbar";
import Construction from "../../Components/Construction/Construction";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import CardImg1 from "../../assets/images/Rectangle 34.svg";
import CardImg2 from "../../assets/images/Rectangle 36.svg";
import CardImg3 from "../../assets/images/Rectangle 12 (3).svg";
import ContactForm from "../../Components/ContactForm/ContactForm";

import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <Mynavbar />
      <Container fluid>
        <Row className="portfolio-construction">
          <Col lg="8">
            <div className="construction-container">
              <div>
                <Construction
                  title="Our Construction Projects"
                  descritption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio."
                  className="portfolio-container"
                  btnlabel=""
                />
              </div>
            </div>
          </Col>
          <Col className=" py-5"></Col>
        </Row>
      </Container>
      <Container className="my-5">
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
      </Container>
      <Container fluid className="m-0 p-0">
        <div className="newproject p-4 ">
          <h2 className="fw-bold text-center">Have a Project in Mind?</h2>
          <h2 className="fw-bold text-center">Let’s Get Building!</h2>
        </div>
      </Container>
      <Container fluid>
        <ContactForm />
      </Container>
    </>
  );
};

export default Portfolio;
