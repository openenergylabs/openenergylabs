import React, { useState } from "react";
import OelButton from "../components/button";
import Container from "react-bootstrap/Container";
import Partners from "../components/partners";
import MailModal from "../components/modal";

// partners logos
import dfid from "../media/dfid.png";
import epsrc from "../media/epsrc.png";
import gcrf from "../media/gcrf.png";
import fiuk from "../media/fiuk.png";
import bgv from "../media/bgv.png";
import mh from "../media/mh.png";
import moe from "../media/moe.png";
import mohe from "../media/mohe.png";
import hg from "../media/hg.png";
import ukid from "../media/ukid.png";
import ukri from "../media/ukri.png";
import vs from "../media/vs.png";
import ria from "../media/ria.png";

function PartnersSection() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section
      id="partners"
      className={"section"}
      style={{
        backgroundColor: "#FDE3CA",
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
              width: "100%",
              marginTop: "20px",
            }}
          >
            We're backed by some of the leading organisations in energy,
            development and impact investing.
          </p>
        </div>
        <Partners
        // logos={[
        //   epsrc,
        //   fiuk,
        //   ukri,
        //   bgv,
        //   gcrf,
        //   ukid,
        //   vs,
        //   moe,
        //   mh,
        //   hg,
        //   mohe,
        //   dfid,
        // ]}
        >
          <a href="https://epsrc.ukri.org/">
            <img style={{ width: "auto", height: 50 }} src={epsrc} />
          </a>
          <a href="https://www.gov.uk/government/organisations/innovate-uk">
            <img style={{ width: "auto", height: 40 }} src={fiuk} />
          </a>
          <a href="http://ukri.org/">
            <img style={{ width: "auto", height: 40 }} src={ukri} />
          </a>
          <a href="https://bethnalgreenventures.com/">
            <img style={{ width: "auto", height: 50 }} src={bgv} />
          </a>
          <a href="https://www.ukri.org/research/global-challenges-research-fund/">
            <img style={{ width: "auto", height: 50 }} src={gcrf} />
          </a>
          <a href="https://www.ukaiddirect.org/">
            <img style={{ width: "auto", height: 50 }} src={ukid} />
          </a>
          <a href="https://www.virginstartup.org/">
            <img style={{ width: "auto", height: 50 }} src={vs} />
          </a>
          <a href="#">
            <img style={{ width: "auto", height: 80 }} src={moe} />
          </a>
          <a href="#">
            <img style={{ width: "auto", height: 40 }} src={mh} />
          </a>
          <a href="#">
            <img style={{ width: "auto", height: 80 }} src={hg} />
          </a>
          <a href="#">
            <img style={{ width: "auto", height: 80 }} src={mohe} />
          </a>
          <a href="https://www.gov.uk/government/organisations/department-for-international-development">
            <img style={{ width: "auto", height: 50 }} src={dfid} />
          </a>
          <a href="https://www.renewablesinafrica.com/">
            <img style={{ width: "auto", height: 50 }} src={ria} />
          </a>
        </Partners>
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
