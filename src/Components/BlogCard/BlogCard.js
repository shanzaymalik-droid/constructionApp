import React from "react";
import { Card } from "react-bootstrap";
import "./BlogCard.css";

const BlogCard = ({ title, img, subTitle, text, className }) => {
  return (
    <Card className={className}>
      <Card.Img className="rounded-0" variant="top" src={img} />
      <Card.Body>
        <Card.Title className="text-muted fw-bold my-2">{title}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted fw-lighter">
          {subTitle}
        </Card.Subtitle>
        <Card.Text className="text-muted">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
