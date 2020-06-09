import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Vimeo from "@u-wave/react-vimeo";
import MailModal from "../components/modal";
import OelButton from "../components/button";
import ReactPlayer from "react-player";
import VimeoVideo from "../components/vimeoemb";

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
      }}
    >
      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "50px",
        }}
      >
        <MailModal show={show} onHide={handleClose} />

        <h3
          id="video-section-title"
          className="section-title"
          style={{ color: "#FDE3CA", marginBottom: "50px" }}
        >
          We’re raising investment soon on Crowdcube
        </h3>

        <div
          id="videoJourneyWrapper"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )",
            // backgroundColor: "#ff3",
            width: "80%",
            justifyItems: "center",
          }}
        >
          <div
            id="journey-vid-sect"
            style={{
              width: "70%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              color: "#FDE3CA",
            }}
          >
            <p style={{ fontSize: "20px" }}>Join us on our journey </p>
            <p style={{ fontSize: "20px", margin: 20 }}>↓</p>
            <p style={{ textAlign: "justify" }}>
              Open Energy Labs is an EdTech company with a purpose: Teaching
              students in Africa how to build renewable electricity supplies. We
              are already backed by both Innovate UK and the Zambian National
              Science and Technology Council. 
            </p>
            <p style={{ textAlign: "justify" }}>
              To develop technology and deliver our programme to 110,000
              students in Zambia, we are about to open a crowd investment round.
            </p>
            <p style={{ textAlign: "justify" }}>
              Register below for info, updates and an exclusive early-access
              link to our campaign when it is live. You will have the chance 
              to join us on our journey as we support young people in Africa 
              to build the renewable energy systems of the future.
            </p>

            <div
              id="button1-vid-sect"
              style={{ marginTop: "30px", marginBottom: "50px" }}
            >
              <OelButton
                onPressed={handleShow}
                color={"#fde3ca"}
                name={"Register to invest"}
              />
            </div>
          </div>
          <div
            id="video-vid-sect"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              color: "#FDE3CA",
            }}
          >
            <p style={{ fontSize: "20px" }}>Watch our campaign video</p>
            <p style={{ fontSize: "20px", margin: 20 }}>↓</p>
            <div style={{ width: "100%", position: "relative" }}>
              <VimeoVideo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
