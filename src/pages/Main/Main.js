import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mynav from "../../Components/Mynavbar/Mynavbar";
import Btn from "../../Components/Button/Button";
import Service from "../../Components/ConstructionService/Service";
import img from "../../assets/images/Group 440.svg";
import Construction from "../../Components/Construction/Construction";
import Img3 from "../../assets/images/Group 441.svg";
import Img4 from "../../assets/images/Rectangle 8 (2).svg";
import Img5 from "../../assets/images/Vector 4.svg";
import Img6 from "../../assets/images/Vector 1.svg";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import CardImg1 from "../../assets/images/Rectangle 12 (2).svg";
import CardImg2 from "../../assets/images/Rectangle 34.svg";
import CardImg3 from "../../assets/images/Rectangle 36.svg";
import TextCard from "../../Components/TextCard/TextCard";
import CustomCol from "../../Components/CustomCol/CustomCol";
import Questions from "../../Components/Question/Question";
import ContactForm from "../../Components/ContactForm/ContactForm";
import TestimonalCarousel from "../../Components/TestimonalCarousel/TestimonalCarousel";
import "./main.css";

const Main = () => {
  return (
    <>
      <Mynav />
      <Container fluid>
        <Row>
          <Col lg="8" className="bg">
            <div className="construction-container">
              <div>
                <Construction
                  title="CONSTRUCTION"
                  descritption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio."
                  className="main-contruction"
                  btnlabel="VIEW OUR WORK"
                />
              </div>
            </div>
          </Col>
          <Col className="service-card py-5">
            <Row>
              <Service
                className="main-service"
                mainHeading="OUR SERVICES "
                title="Building Construction"
                description="Lorem ipsum dolor sit consectetur adipiscing elit."
                img={img}
              />
            </Row>
            <Row>
              <Service
                className="main-service"
                title="Foundation Work"
                description="Lorem ipsum dolor sit consectetur adipiscing elit."
                img={Img3}
              />
            </Row>
            <Row>
              <Service
                className="main-service"
                title="Site Management"
                description="Lorem ipsum dolor sit consectetur adipiscing elit."
                img={img}
              />
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row className="text-lg-start text-center gap-3">
          <Col lg="7">
            <h3 className="fw-bold">Get a Quote For Your Project</h3>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Btn
              label="FREE QUOTE"
              style={{
                color: "#FFB400",
                backgroundColor: "white",
                fontWeight: "bold",
                border: "3px solid #FFB400",
                padding: "9px 24px",
              }}
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className="px-0 my-5">
        <Row className="m-0 p-0">
          <Col lg="4" className="m-0 p-0">
            <img src={Img4} className="w-100" />
          </Col>
          <Col className="d-flex flex-column justify-content-between project-container m-0 p-0">
            <Row className=" project-sub-container ">
              <Row className=" ">
                <Col className="mt-2">
                  {" "}
                  <h1 className="fw-bold">No Project Too Big Or Too Small</h1>
                  <img src={Img5} />
                </Col>
              </Row>

              <Row className="my-4 fw-lighter lh-lg">
                <Col>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien, dignissim tristique tellus sed faucibus nullam.
                    Tincidunt mauris ut quam sed mauris proin feugiat.
                    Scelerisque lorem posuere iaculis nunc amet phasellus.
                  </p>
                  <p className="py-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien, dignissim tristique tellus sed faucibus nullam.
                  </p>
                </Col>
                <Col>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien, dignissim tristique tellus sed faucibus nullam.
                    Tincidunt mauris ut quam sed mauris proin feugiat.
                    Scelerisque lorem posuere iaculis nunc amet phasellus.
                  </p>

                  <Btn
                    className="my-5 "
                    label="LEARN MORE"
                    style={{
                      backgroundColor: "white",
                      fontWeight: "bold",
                      border: "3px solid #000000",
                      padding: "5px 24px",
                      margin: "3rem 0px",
                    }}
                  />
                </Col>
              </Row>
            </Row>

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
              cardTittle="Project Title"
              cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas. "
              btnLabel="VIEW PROJECT"
            />
          </Col>
          <Col
            lg="4"
            className="my-2 d-flex align-items-center justify-content-center"
          >
            <ProjectCard
              image={CardImg2}
              cardTittle="Project Title"
              cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas. "
              btnLabel="VIEW PROJECT"
            />
          </Col>
          <Col
            lg="4"
            className="my-2 d-flex align-items-center justify-content-center"
          >
            <ProjectCard
              image={CardImg3}
              cardTittle="Project Title"
              cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas. "
              btnLabel="VIEW PROJECT"
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
      <Container fluid className="m-0 p-0">
        <Row>
          <Col className="m-0 p-0" lg="4">
            <TextCard
              className="textCard"
              title="We’ve Been Building For Over 10 Years"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus."
              label="ABOUT US"
            />
          </Col>
          <Col className="m-0 p-0">
            <Row className="custom-vedio" style={{ height: "600px" }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Mp8IXI1kzvQ?si=N6Upk75j_XqdiyqY"
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
      <Container className="my-3">
        <Row>
          <Col lg="6">
            <TextCard
              className="textCard2"
              title="Let’s Build Something Together"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. "
              label="GET IN TOUCH"
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
      <Container className="my-5">
        <div className="d-flex flex-column text-center align-items-center ">
          <h4 className="fw-bold  mb-2">Client Testimonials</h4>
          <img className="w-30" src={Img6} />
        </div>
        <TestimonalCarousel />
      </Container>
      <Container fluid>
        <ContactForm />
      </Container>
    </>
  );
};

export default Main;
