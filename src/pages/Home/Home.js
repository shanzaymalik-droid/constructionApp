import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mynavbar from "../../Components/Mynavbar/Mynavbar";
import Construction from "../../Components/Construction/Construction";
import Service from "../../Components/ConstructionService/Service";
import Img2 from "../../assets/images/Vector 25.svg";
import Img4 from "../../assets/images/Group 440 (1).svg";
import Img3 from "../../assets/images/Group 434.svg";
import Img5 from "../../assets/images/Group 441 (1).svg";
import Img6 from "../../assets/images/Group 433.svg";
import Img7 from "../../assets/images/Group 439 (1).svg";
import Img8 from "../../assets/images/Group 445.svg";
import Img9 from "../../assets/images/Vector 4.svg";
import CustomCol from "../../Components/CustomCol/CustomCol";
import TestimonalCarousel from "../../Components/TestimonalCarousel/TestimonalCarousel";
import Img10 from "../../assets/images/Vector 1.svg";
import ContactForm from "../../Components/ContactForm/ContactForm";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Mynavbar />
      <Container fluid className="m-0 p-0">
        <Construction
          className="home-container"
          title="Construction Inc"
          descritption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus erat consectetur eu sapien eget, rhoncus consectetur sem."
          btnlabel="VIEW OUR WORK"
        />
      </Container>
      <Container className="my-5">
        <Row className="my-2">
          <Col md="4">
            <Service
              title="Building Construction"
              description="Lorem ipsum dolor sit consectetur adipiscing elit."
              img={Img2}
              className="home-service"
            />
          </Col>
          <Col md="4">
            <Service
              title="Building Construction"
              description="Lorem ipsum dolor sit consectetur adipiscing elit."
              img={Img3}
              className="home-service"
            />
          </Col>
          <Col md="4">
            <Service
              className="home-service"
              title="Building Construction"
              description="Lorem ipsum dolor sit consectetur adipiscing elit."
              img={Img4}
            />
          </Col>
        </Row>
        <Row className="my-2">
          <Col md="4">
            <Service
              className="home-service"
              title="Building Construction"
              description="Lorem ipsum dolor sit consectetur adipiscing elit."
              img={Img5}
            />
          </Col>
          <Col md="4">
            <Service
              className="home-service"
              title="Building Construction"
              description="Lorem ipsum dolor sit consectetur adipiscing elit."
              img={Img6}
            />
          </Col>
          <Col md="4">
            <Service
              className="home-service"
              title="Building Construction"
              description="Lorem ipsum dolor sit consectetur adipiscing elit."
              img={Img7}
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className="mt-4">
        <Row>
          <Col lg="4" className="service m-0 p-0">
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
          </Col>
          <Col lg="8" className="d-flex m-0 p-0">
            <div className=" d-flex flex-column justify-content-between ">
              <div className="text-center text-lg-start mx-4">
                <div className="mt-2">
                  {" "}
                  <h1 className="fw-bold">No Project Too Big Or Too Small</h1>
                  <img src={Img9} />
                </div>
                <div className="d-flex flex-column flex-md-row fw-lighter gap-2 my-2  text-lg-start text-center ">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien, dignissim tristique tellus sed faucibus nullam.
                    Tincidunt mauris ut quam sed mauris proin feugiat.
                    Scelerisque lorem posuere iaculis nunc amet phasellus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien, dignissim tristique tellus sed faucibus nullam.
                    Tincidunt mauris ut quam sed mauris proin feugiat.
                    Scelerisque lorem posuere iaculis nunc amet phasellus.
                  </p>
                </div>
              </div>

              <div className="d-flex  text-lg-start text-center">
                <CustomCol
                  className="home-col"
                  title1="Get Free Consultation"
                  btnClass="home-service-btn"
                  btnLabel="ONLINE ESTIMATE FORM"
                  subClass1="home-col-1"
                  subClass2="home-col-2"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="m-0 p-0">
        <Construction
          className="home-container2"
          title="We’ve Been Building For Over 20 years"
          descritption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus erat consectetur eu sapien eget, rhoncus consectetur sem."
          btnlabel="ABOUT US"
        />
      </Container>
      <Container className="my-5">
        <div className="d-flex flex-column text-center align-items-center ">
          <h4 className="fw-bold  my-2">Client Testimonials</h4>
          <img className="w-30" src={Img10} />
        </div>
        <TestimonalCarousel />
      </Container>
      <Container fluid>
        <ContactForm />
      </Container>
    </>
  );
};

export default Home;
