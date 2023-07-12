// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ImageCard = ({ image, deleteImage }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Link to="/full" target="_blank">
        <Card.Img variant="top" src={image.urls.small} />
      </Link>
      <Card.Body>
        <Card.Title>{image.title.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button variant="primary" onClick={() => deleteImage(image._id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};
