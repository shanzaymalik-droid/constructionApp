import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mynav from "../../Components/Mynavbar/Mynavbar";
import Construction from "../../Components/Construction/Construction";
import "./Blog.css";
import BlogCard from "../../Components/BlogCard/BlogCard";
import CardImg1 from "../../assets/images/Rectangle 45.svg";
import CardImg2 from "../../assets/images/Rectangle 48 (1).svg";
import CardImg3 from "../../assets/images/Rectangle 50.svg";
import CardImg4 from "../../assets/images/Rectangle 52 (1).svg";
import CardImg5 from "../../assets/images/Rectangle 54 (1).svg";
import CardImg6 from "../../assets/images/Rectangle 56 (1).svg";
import ContactForm from "../../Components/ContactForm/ContactForm";

const Blog = () => {
  return (
    <>
      <Mynav />
      <Container fluid>
        <Row className="blog-construction">
          <Col lg="8">
            <div className="construction-container">
              <div>
                <Construction
                  title="NEWS"
                  className="blog-container"
                  btnlabel=""
                />
              </div>
            </div>
          </Col>
          <Col className=" py-5"></Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row>
          <Col lg="4" className=" my-3 d-flex justify-content-center justify-content-lg-start">
            <BlogCard
              className="mycard"
              img={CardImg1}
              title="Nunc Volutpat Venenatis"
              subTitle="May 9, 2014 | Category"
              text="Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi."
            />
          </Col>
          <Col lg="4" className=" my-3 d-flex justify-content-center justify-content-lg-start">
            <BlogCard
              className="mycard"
              img={CardImg2}
              title="Vestibulum Nisl Felis"
              subTitle="May 9, 2014 | Category"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. "
            />
          </Col>
          <Col lg="4" className=" my-3 d-flex justify-content-center justify-content-lg-start">
            <BlogCard
              className="mycard"
              img={CardImg3}
              title="Proin Eu Augue Efficitur"
              subTitle="May 9, 2014 | Category"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. "
            />
          </Col>
        </Row>
        <Row className="">
          <Col lg="4" className="  d-flex justify-content-center justify-content-lg-start">
            <BlogCard
              className="mycard my-5"
              img={CardImg4}
              title="Nunc Volutpat Venenatis"
              subTitle="May 9, 2014 | Category"
              text="Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Maecenas urna sapien, dignissim a augue vitae, porttitor luctus urna. Morbi scelerisque semper congue. "
            />
          </Col>
          <Col lg="4" className="my-3 d-flex justify-content-center  justify-content-lg-start align-items-lg-start align-items-center">
            <BlogCard
              className="mycard"
              img={CardImg5}
              title="Vestibulum Nisl Felis"
              subTitle="May 9, 2014 | Category"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. "
            />
          </Col>
          <Col lg="4" className="my-3 d-flex justify-content-lg-start justify-content-center align-items-lg-start align-items-center">
            <BlogCard
              className="mycard"
              img={CardImg6}
              title="Proin Eu Augue Efficitur"
              subTitle="May 9, 2014 | Category"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet.Donec quis felis imperdiet, vestibulum est ut, pulvinar dolor.   "
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

export default Blog;
