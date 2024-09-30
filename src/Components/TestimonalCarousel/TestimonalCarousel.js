import React from "react";
import Testimonal from "../Testimonal/Testimonal";
import Slider from "react-slick";
import "./TestimonalCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonalCarousel = () => {
  const cardData = [
    {
      cardText:
        "Software Engineer with 5 years of experience in web development.",
      cardName: "John Doe",
      className: "testimonal-card",
    },
    {
      cardText:
        "Software Engineer with 5 years of experience in web development.",
      cardName: "John Doe",
      className: "testimonal-card",
    },
    {
      cardText:
        "Software Engineer with 5 years of experience in web development.",
      cardName: "John Doe",
      className: "testimonal-card",
    },
    {
      cardText:
        "Software Engineer with 5 years of experience in web development.",
      cardName: "John Doe",
      className: "testimonal-card",
    },
    {
      cardText:
        "Software Engineer with 5 years of experience in web development.",
      cardName: "John Doe",
      className: "testimonal-card",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Scroll 1 slide at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="" style={{ width: "100%" }}>
      <Slider {...settings}>
        {cardData.map((item, index) => (
          <div key={index}>
            <Testimonal
              cardTxt={item.cardText}
              cardName={item.cardName}
              className={item.className}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonalCarousel;
