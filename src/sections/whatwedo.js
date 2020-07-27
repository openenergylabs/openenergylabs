import React, { useState } from "react";
import common from "../styles/styles";
import Wd2 from "../media/svgComponents/wd2";
import Pip from "../media/svgComponents/people";
import Mch from "../media/svgComponents/machine";
import CarouselComp from "../components/carasoul";
import "../styles/whatwedo.css";
import Partners from "../components/partners";
import HoverUnderline from "../components/hoverUnderline";

function WhatWeDoSection() {
  // const [, setShow] = useState(false);
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

        <div id="wd-lg-wrapper">
          <div className="service-item">
            <Wd2 />
            <p className="service-title">Energy Makers Academy</p>
            <p className="wd-down-arrow">↓</p>
            <p className="service-sub">
              We teach students through a “learn by making” approach, providing
              them with the skills and knowledge to develop universal access to
              electricity.
            </p>

          </div>
          <div className="service-item">
            <Mch />
            <p className="service-title">Energy Development Toolkits</p>
            <p className="wd-down-arrow">↓</p>
            <p className="service-sub">
              Our mobile learning platform and integrated hardware demystifies
              energy systems, and offers powerful capabilities for their design.
            </p>


          </div>
          <div className="service-item">
            <Pip />
            <p className="service-title">Reduce Energy Poverty</p>
            <p className="wd-down-arrow">↓</p>
            <p className="service-sub">
              We empower and inspire people and communities to innovate towards
              affordable, reliable and sustainable energy systems.
            </p>
          </div>
        </div>

        {/* carousel for mobile */}
        <div id="wd-sm-wrapper">
          <CarouselComp className={"services"}>
            <div className="service-item">
              <Wd2 />
              <p className="service-title">Energy Makers Academy</p>
              <p className="wd-down-arrow">↓</p>
              <p className="service-sub">
                We teach students through a “learn by making” approach,
                providing them with the skills and knowledge to develop
                universal access to electricity.
              </p>
              
            </div>
            <div className="service-item">
              <Mch />
              <p className="service-title">Energy Development Toolkits</p>
              <p className="wd-down-arrow">↓</p>
              <p className="service-sub">
                Our mobile learning platform and integrated hardware demystifies
                energy systems, and offers powerful capabilities for their
                design.
              </p>
            </div>

            <div lg={12} sm className="service-item">
              <Pip />
              <p className="service-title">Reduce Energy Poverty</p>
              <p className="wd-down-arrow">↓</p>
              <p className="service-sub">
                We empower and inspire people and communities to innovate
                towards affordable, reliable and sustainable energy systems.
              </p>
            </div>
          </CarouselComp>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
