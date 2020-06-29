import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
function CarouselComp(params) {
  return (
    <Carousel
      interval={null}
      controls={false}
      style={{ height: "100px", background: "#abed47" }}
    >
      <Carousel.Item>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Item>
      <Carousel.Item>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Item>
      <Carousel.Item>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
