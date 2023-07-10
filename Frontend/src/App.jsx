import { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { ImageCard } from "./components/ImageCard";
import { Welcome } from "./components/Welcome";
import { Container, Row, Col } from "react-bootstrap";
import { context } from "./contexts/ContextProvider";
import axios from "axios";

// const UNSPLASH_KEY = "vI6JHehkjv1HAUdTi7wq7fzjV5iIMo55JF9QW4P81n8";

const App = () => {
  const [word, setWord] = useState("");
  const { images, setImages } = useContext(context);

  useEffect(() => {
    const fetchImagesFromExpress = async () => {
      const { data } = await axios.get("http://localhost:5000/api/images");
      setImages([...data]);
    };
    fetchImagesFromExpress();
  }, []);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/image", {
        title: word,
      });

      setImages([{ ...data, title: word }, ...images]);
      setWord("");
    } catch (e) {
      console.error(e);
      setWord("");
    }
  };
  const handleDeleteImag = async (id) => {
    // setImages(images.filter((image) => image.id !== id));
    const { data } = await axios.delete(
      `http://localhost:5000/api/images/${id}`
    );

    setImages([...data]);
  };
  return (
    <div>
      <Header title="Image Gallery2" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        {images.length > 0 ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage={handleDeleteImag} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
};

export default App;
