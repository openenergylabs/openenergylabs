import React, { useState } from "react";
import OelButton from "./button";
import ButtonGroup from "./buttonGroup";
import MailModal from "./modal";

function Hero() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header id={"hero"} className={"section"}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#FDE3CA",
          justifyContent: "center",
          position: "relative",
          padding: 20,
        }}
      >
        <MailModal show={show} onHide={handleClose} />
        <h1 className={"hdr-text font-glyph"}>Open Energy Labs</h1>
        <p className="sub-hdr-text font-glyph">
          Universal access to electricity through education
        </p>

        <div
          className="buttonGrp"
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
          <OelButton
            path="#videosection"
            color="#5D4DC4"
            name="Learn more"
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
      </div>
    </header>
  );
}
export default Hero;
