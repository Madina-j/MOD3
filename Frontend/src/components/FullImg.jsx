import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

export const FullImg = () => {
  const { id } = useParams();
  const [image, setImage] = useState();

  useEffect(() => {
    const fetchImageFromBackend = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/images/${id}`
        );

        setImage(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchImageFromBackend();
  }, []);

  return (
    <Container>{image && <Image src={image.urls.full} fluid />}</Container>
  );
};
