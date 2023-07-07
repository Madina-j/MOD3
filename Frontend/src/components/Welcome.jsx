import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

export const Welcome = () => {
  <Jumbotron>
    <h1>Images Gallery</h1>
    <p>
      This is a simple application that retrieves photos using the Unsplash API.
      To get started, enter any search query in the input field.
    </p>
    <p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        Learn more
      </Button>
    </p>
  </Jumbotron>;
};
