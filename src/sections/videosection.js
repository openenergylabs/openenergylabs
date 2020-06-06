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
          style={{ color: "#FDE3CA", marginBottom: "50px", fontSize: "50px" }}
        >
          We’re raising investment soon on Crowdcubecle
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            // backgroundColor: "#ff3",
            width: "80%",
            // justifyItems: "center",
          }}
        >
          <div
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
              Teaching students in Africa how to build renewable electricity
              supplies, Open Energy Labs is an EdTech company with a purpose. We
              are raising investment on crowdcube to develop technology and
              deliver our programme to 110,000 students in Zambia.
            </p>
            <p>
              {" "}
              We are already backed by Innovate UK and the Zambian National
              Science and Technology Council and we are now giving you the
              chance to join us on our journey, as we support young people in
              Africa to build the renewable energy systems of the future
            </p>

            <div style={{ marginTop: "30px" }}>
              <OelButton
                onPressed={handleShow}
                color={"#fde3ca"}
                name={"Register to invest"}
              />
            </div>
          </div>
          <div
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
            <Vimeo width={450} video="https://vimeo.com/425909940" />
          </div>
        </div>
        <div style={{ margin: "60px", marginLeft: "100px" }}>
          <OelButton
            path="#whatwedo"
            color="#fde3ca"
            name="What we do"
            hideAnt={true}
          />
        </div>
        <div
          style={{
            borderBottom: "1px #fde3ca solid",
            width: "95%",
            position: "absolute",
            bottom: "5%",
          }}
        ></div>
      </div>
    </section>
  );
}

export default VideoSection;
