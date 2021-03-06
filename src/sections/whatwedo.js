import React, { useState } from "react";
import common from "../styles/styles";
import Wd2 from "../media/svgComponents/wd2";
import Pip from "../media/svgComponents/people";
import Mch from "../media/svgComponents/machine";
import CarouselComp from "../components/carasoul";
import "../styles/whatwedo.css";

function WhatWeDoSection() {
  const [, setShow] = useState(false);

  return (
    <section
      id="whatwedo"
      className="section"
      style={{
        backgroundColor: "#FEA90E",
        ...common.centerItemsVt,
      }}
    >
      <div
        className="content"
        style={{
          ...common.centerItemsVt,
          paddingTop: "100px",
          paddingBottom: "100px",
          height: "100%",
        }}
      >
        <h3 className="section-title">What we do</h3>
        {/* carousel for mobile */}
        <CarouselComp className={"services"}>
          <div className="service-item">
            <Wd2 />
            <p className="service-title">Energy Makers Academy</p>
            <p className="wd-down-arrow">↓</p>
            <p className="service-sub">
              We teach students through a “learn by making” approach, providing
              them with the skills and knowledge to develop universal access to
              electricity.
            </p>
            <a href="#">
              <p className="linkText">Find out more</p>
            </a>
          </div>
          <div className="service-item">
            <Mch />
            <p className="service-title">Energy Development Toolkits</p>
            <p className="wd-down-arrow">↓</p>
            <p className="service-sub">
              Our mobile learning platform and integrated hardware demystifies
              energy systems, and offers powerful capabilities for their design.
            </p>
            <a href="#">
              <p className="linkText">Find out more</p>
            </a>
          </div>

          <div lg={12} sm className="service-item">
            <Pip />
            <p className="service-title">Reduce Energy Poverty</p>
            <p className="wd-down-arrow">↓</p>
            <p className="service-sub">
              We empower and inspire people and communities to innovate towards
              affordable, reliable and sustainable energy systems.
            </p>
            <a href="#">
              <p className="linkText">Find out more</p>
            </a>
          </div>
        </CarouselComp>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
