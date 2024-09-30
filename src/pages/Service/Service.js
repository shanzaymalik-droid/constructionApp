import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Construction from "../../Components/Construction/Construction";
import Mynavbar from "../../Components/Mynavbar/Mynavbar";
import img from "../../assets/images/Group 433 (1).svg";
import Img2 from "../../assets/images/Group 429.svg";
import Img3 from "../../assets/images/Group 434 (1).svg";
import Service from "../../Components/ConstructionService/Service";
import TextCard from "../../Components/TextCard/TextCard";
import CustomCol from "../../Components/CustomCol/CustomCol";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import CardImg1 from "../../assets/images/Rectangle 13 (1).svg";
import CardImg2 from "../../assets/images/Rectangle 35.svg";
import CardImg3 from "../../assets/images/Rectangle 37.svg";
import Btn from "../../Components/Button/Button";
import Img6 from "../../assets/images/Vector 1.svg";
import Questions from "../../Components/Question/Question";
import ContactForm from "../../Components/ContactForm/ContactForm";

import "./Service.css";

const ServicePage = () => {
  return (
    <>
      <Mynavbar />
      <Container fluid>
        <Row className="service-construction">
          <Col lg="8">
            <div className="construction-container">
              <div>
                <Construction
                  title="Framing"
                  descritption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio."
                  className="main-contruction"
                  btnlabel="GET A QUOTE"
                />
              </div>
            </div>
          </Col>
          <Col className=" py-5">
            <Row>
              <Service
                className="about-service"
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
      <Container>
        <div className="d-lg-flex gap-5 ">
          <p className="px-2 my-5">
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum. Nulla fermentum, metus quis sodales
            tristique, augue mauris molestie augue, non feugiat ligula neque nec
            felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices
            mauris. Aliquam blandit est in eros elementum, quis vehicula est
            suscipit. Proin cursus, dolor a mollis consectetur, risus dolor
            fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare
            nisl a tortor ultrices bibendum.
          </p>

          <p className="px-2 my-5">
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum. Nulla fermentum, metus quis sodales
            tristique, augue mauris molestie augue, non feugiat ligula neque nec
            felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices
            mauris. Aliquam blandit est in eros elementum, quis vehicula est
            suscipit. Proin cursus, dolor a mollis consectetur, risus dolor
            fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare
            nisl a tortor ultrices bibendum.
          </p>
        </div>
      </Container>
      <Container fluid className="m-0 p-0">
        <Row>
          <Col className="m-0 p-0" lg="4">
            <TextCard
              className="textCard3"
              title="About Process"
              text="Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus.

"
            />
          </Col>
          <Col className="m-0 p-0">
            <Row className="custom-vedio" style={{ height: "600px" }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/iLhYtTbnO0o?si=FjjN9f_8aAY3Mm57"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Row>
            <Row>
              <CustomCol
                className="quote"
                subClass1="col1"
                subClass2="col2"
                title1="Call for a Quote"
                text1="(346) 234-6973"
                btnClass="custom-col-btn"
                btnLabel="ONLINE ESTIMATE FORM"
              />
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4 mb-0">
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
      <Container className="mb-5 mt-0 ">
        <Row className="">
          <Col lg="6">
            <TextCard
              className="textCard2"
              title="F.A.Q"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. "
              label="ASK A QUESTION"
            />
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
      <Container fluid>
        <ContactForm />
      </Container>
    </>
  );
};

export default ServicePage;
