import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mynav from "../../Components/Mynavbar/Mynavbar";
import Construction from "../../Components/Construction/Construction";
import TextCard from "../../Components/TextCard/TextCard";
import Img from "../../assets/images/Rectangle 41.svg";
import Img1 from "../../assets/images/Rectangle 42.svg";
import Img2 from "../../assets/images/Rectangle 43.svg";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import Btn from "../../Components/Button/Button";
import CardImg1 from "../../assets/images/Rectangle 12 (2).svg";
import CardImg2 from "../../assets/images/Rectangle 34.svg";
import CardImg3 from "../../assets/images/Rectangle 36.svg";
import Img6 from "../../assets/images/Vector 1.svg";
import ContactForm from "../../Components/ContactForm/ContactForm";

const Project = () => {
  return (
    <>
      <Mynav />
      <Container fluid>
        <Row className="portfolio-construction">
          <Col lg="8">
            <div className="construction-container">
              <div>
                <Construction
                  title="Monarch HQ Project"
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
      <Container>
        <Row className="my-4">
          <Col lg="6">
            <TextCard
              className="textCard4"
              title="About Process"
              text="Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus.
"
            />
          </Col>
          <Col lg="6">
            <div className="pt-5">
              <img className="w-100" src={Img} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <img className="w-100" src={Img1} />
      </Container>
      <Container>
        <Row className="my-5 gap-lg-0 gap-2 d-flex align-items-center justify-content-center text-lg-start text-center">
          <Col lg="6">
            <div>
              <img className="w-100" src={Img2} />
            </div>
          </Col>
          <Col lg="6">
            <div className="fw-lighter">
              <p>
                Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
                erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
                cursus, dolor a mollis consectetur, risus dolor fermentum massa,
                a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
                ultrices bibendum. Nulla fermentum, metus quis sodales
                tristique, augue mauris molestie augue non feugiat ligula neque
                nec felis.
              </p>
              <p>
                Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
                Proin cursus, dolor a mollis consectetur, risus dolor fermentum
                massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
                tortor ultrices bibendum. Nulla fermentum, metus quis sodales
                tristique, augue mauris molestie augue, non feugiat ligula neque
                nec felis.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="fw-bold">Related Projects</h1>
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
              cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. "
              btnLabel="LEARN MORE"
            />
          </Col>
          <Col
            lg="4"
            className="my-2 d-flex align-items-center justify-content-center"
          >
            <ProjectCard
              image={CardImg2}
              cardTittle="ServiceTitle"
              cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. "
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
              cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. "
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

export default Project;
