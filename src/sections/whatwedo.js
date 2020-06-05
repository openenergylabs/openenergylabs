import React, { useState } from "react";
import OelButton from "../components/button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import common from "../styles/styles";
import learningIcon from "../media/Learning.png";
import energyIcon from "../media/Energy.png";
import captureIcon from "../media/Capture.png";
import MailModal from "../components/modal";

function WhatWeDoSection() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section
      id="whatwedo"
      className="section"
      style={{
        ...common.centerItemsVt,
        backgroundColor: "#FEA90E",
        paddingTop: "10%",
        paddingBottom: "10%",
      }}
    >
      <MailModal show={show} onHide={handleClose} />
      <h3 className="section-title font-glyph">What we do</h3>
      <Row className={"services"}>
        <Col sm className="service-item">
          <img src={learningIcon} alt="image" />
          <p className="service-title font-glyph">Energy Makers Academy</p>
          <p className="service-sub">
            We teach students through a “learn by making” approach, providing
            them with the skills and knowledge to develop universal access to
            electricity.
          </p>
        </Col>
        <Col sm className="service-item font-glyph">
          <img src={captureIcon} alt="image" />
          <p className="service-title">Energy Development Toolkits</p>
          <p className="service-sub">
            Our mobile learning platform and integrated hardware demystifies
            energy systems, and offers powerful capabilities for their design.
          </p>
        </Col>
        <Col sm className="service-item font-glyph">
          <img src={energyIcon} alt="image" />
          <p className="service-title">Reduce Energy Poverty</p>
          <p className="service-sub">
            We empower and inspire people and communities to innovate towards
            affordable, reliable and sustainable energy systems.
          </p>
        </Col>
      </Row>
      <div
        className="buttonGrp"
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
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
      <div
        style={{
          borderBottom: "1px #5D4DC4 solid",
          width: "95%",
          position: "absolute",
          bottom: "5%",
        }}
      ></div>
    </section>
  );
}

export default WhatWeDoSection;
