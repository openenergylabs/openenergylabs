import React, { useState } from "react";
import OelButton from "../components/button";
import common from "../styles/styles";
import MailModal from "../components/modal";
import Wd1 from "../media/svgComponents/wd1";
import Wd2 from "../media/svgComponents/wd2";
import Wd3 from "../media/svgComponents/wd3";
import DoubleArrow from "../media/svgComponents/doubleFacedArrow";
import Pip from "../media/svgComponents/people";
import Mch from "../media/svgComponents/machine";

function WhatWeDoSection() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        }}
      >
        <MailModal show={show} onHide={handleClose} />
        <h3 className="section-title font-glyph">What we do</h3>
        <div className={"services"}>
          <div className="service-item">
            <Wd2 />
            <p className="service-title font-glyph">Energy Makers Academy</p>
            <p className="service-sub">
              We teach students through a “learn by making” approach, providing
              them with the skills and knowledge to develop universal access to
              electricity.
            </p>
          </div>
          <div
            className="arrow-wwd-sec"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              maxWidth: "20px",
              color: "#5d4dc4",
              paddingTop: 50,
            }}
          >
            <DoubleArrow />
          </div>
          <div className="service-item font-glyph">
            <Mch />
            <p className="service-title">Energy Development Toolkits</p>
            <p className="service-sub">
              Our mobile learning platform and integrated hardware demystifies
              energy systems, and offers powerful capabilities for their design.
            </p>
          </div>
          <div
            className="arrow-wwd-sec"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              maxWidth: "20px",
              paddingTop: 50,
              color: "#5d4dc4",
            }}
          >
            <DoubleArrow />
          </div>
          <div lg={12} sm className="service-item font-glyph">
            <Pip />
            <p className="service-title">Reduce Energy Poverty</p>
            <p className="service-sub">
              We empower and inspire people and communities to innovate towards
              affordable, reliable and sustainable energy systems.
            </p>
          </div>
        </div>
        <div className="buttonGrp" style={{ marginBottom: "1rem" }}>
          <OelButton
            path="#le1section"
            color="#5D4DC4"
            name="Our first product"
            hideAnt={true}
          />
          <OelButton
            onPressed={handleShow}
            color={"#5D4DC4"}
            name={"Register to invest"}
          />
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
