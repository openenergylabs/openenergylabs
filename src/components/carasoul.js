import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
function CarouselComp({ children }) {
  return (
    <Carousel  interval={null} controls={false} style={{ height: "100%" }}>
      {children.length > 1 &&
        children.map((child) => <Carousel.Item>{child}</Carousel.Item>)}
    </Carousel>
  );
}

export default CarouselComp;
