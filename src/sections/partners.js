import React, { useState } from "react";
import OelButton from "../components/button";
import Container from "react-bootstrap/Container";
// partners logos
import bcv from "../media/bcv.png";
import eps from "../media/eps.png";
import fik from "../media/fik.png";
import uik from "../media/uik.png";
import Partners from "../components/partners";
import MailModal from "../components/modal";

function PartnersSection() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section
      id="partners"
      className={"section"}
      style={{
        backgroundColor: "#FF7F48",
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <MailModal show={show} onHide={handleClose} />
      <Container
        className="content"
        fluid
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "3%",
        }}
      >
        <div
          style={{
            marginBottom: "2.5em",
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h3
            className="section-title"
            style={{
              textAlign: "center",
              color: "#5D4DC4",
              marginBottom: 10,
            }}
          >
            Our partners & investors
          </h3>
          <p
            style={{
              textAlign: "center",
              color: "#5D4DC4",
              fontSize: "20px",
              width: "80%",
            }}
          >
            We're backed by some of the leading organisations in energy,
            development and impact investing.
          </p>
        </div>
        <Partners
          logos={[
            eps,
            fik,
            uik,
            bcv,
            eps,
            eps,
            uik,
            fik,
            bcv,
            eps,
            eps,
            fik,
            uik,
            bcv,
            eps,
            eps,
            uik,
            fik,
            bcv,
            eps,
          ]}
        />
        <div
          className="buttonGrp"
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
          <OelButton
            path="mailto:hello@localelectricity.org"
            color="#5D4DC4"
            name="Partner with us"
            hideAnt={true}
          />
          <OelButton
            onPressed={handleShow}
            color={"#5D4DC4"}
            name={"Register to invest"}
          />
        </div>
      </Container>
    </section>
  );
}

export default PartnersSection;
