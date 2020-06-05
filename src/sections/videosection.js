import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Vimeo from "@u-wave/react-vimeo";
import MailModal from "../components/modal";
import OelButton from "../components/button";

function VideoSection() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section
      id="videosection"
      className={"section"}
      style={{
        backgroundColor: "#5D4DC4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <MailModal show={show} onHide={handleClose} />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          position: "relative",
          padding: "5%",
        }}
      >
        <p style={{ alignSelf: "flex-end", color: "#fde3ca" }}>
          Watch our Crowdcube campaign video
        </p>

        <Vimeo height={500} video="https://vimeo.com/425909940" />

        <div
          className="buttonGrp"
          style={{ marginTop: "3rem", marginBottom: "1rem" }}
        >
          <OelButton
            path="#whatwedo"
            color="#fde3ca"
            name="What we do"
            hideAnt={true}
          />
          <OelButton
            onPressed={handleShow}
            color={"#fde3ca"}
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
      </Container>
      <div
        style={{
          borderBottom: "1px #fde3ca solid",
          width: "95%",
          position: "absolute",
          bottom: "5%",
        }}
      ></div>
    </section>
  );
}

export default VideoSection;
