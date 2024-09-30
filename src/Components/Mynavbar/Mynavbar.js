import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import cart from "../../assets/images/cart 3.svg";
import "./Mynavbar.css";
import { useNavigate } from "react-router-dom";
function Mynavbar() {
  const navigate = useNavigate("");
  const handleClick = () => {
    navigate("/main");
  };
  return (
    <Navbar expand="lg" className=" bg-white px-2">
      <Nav.Link href="#" onClick={handleClick}>
        {" "}
        <h5 className="fw-bolder px-sm-3">Construction Company Landing</h5>{" "}
      </Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" ms-lg-auto d-flex justify-content-end  mx-2 ">
          <Nav.Link href="/project">Project</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/service">Service</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link>
            <img src={cart} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Mynavbar;
