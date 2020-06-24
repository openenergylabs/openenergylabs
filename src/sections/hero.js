import React, { useState } from "react";
import OelButton from "../components/button";
import MailModal from "../components/modal";
import Horizontal from "../components/horizontalLIne";
import "../styles/herosection.css";

function Hero() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <header
      id={"hero"}
      className={"section"}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#FDE3CA",
      }}
    >
      <div
        className="content"
        style={{
          maxHeight: "900px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
          position: "relative",
          padding: 20,
          width: "100%",
        }}
      >
        <MailModal show={show} onHide={handleClose} />
        <h1 className={"hdr-text font-glyph"}>Open Energy Labs</h1>
        <p className="sub-hdr-text font-glyph">
          Universal access to electricity through education
        </p>

        <div
          className="buttonGrp"
          style={{ marginTop: "1rem", marginBottom: "1rem", marginTop: 30 }}
        >
          <OelButton
            path="#videosection"
            color="#5D4DC4"
            name="Learn more"
            hideAnt={true}
          />
          <OelButton
            path="https://www.crowdcube.com/companies/open-energy-labs/pitches/b6nMpb"
            // onPressed={handleShow}
            color={"#5D4DC4"}
            name={"Invest now"}
          />
        </div>
        <Horizontal color={"#5D4DC4"} />
      </div>
    </header>
  );
}
export default Hero;
