import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import common from "../styles/styles";
import MailModal from "../components/modal";
import Le1 from "../media/svgComponents/Le1";
import Arrow from "../media/svgComponents/Le1Arrow";

function Le1Section() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section
      id="le1section"
      className={"section"}
      style={{
        backgroundColor: "#0600FF",
        color: "#6CCDF2",
      }}
    >
      <MailModal show={show} onHide={handleClose} />
      <Container
        className="content"
        style={{
          height: "100%",
          ...common.centerItemsVt,
        }}
      >
        <h3 className="font-glyph" style={{ margin: "5%", fontSize: "50px" }}>
          The world’s first learnable charge controller
        </h3>
        <div
          style={{
            height: "100%",
            display: "grid",
            gridTemplateColumns: "60% 40%",
          }}
        >
          {/* left le1 image*/}
          <div
            style={{
              position: "relative",
            }}
          >
            <div>
              <Le1
                style={{
                  maxWidth: "100%",
                  width: "100%",
                  height: "40%",
                }}
              />
            </div>
          </div>
          {/* right intro text  */}
          <div
            id="le1-intro-col2"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
              marginTop: 50,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                width: "60%",
              }}
            >
              <p style={{ fontSize: "25px" }}>Introducing our first product</p>
              <h2 style={{ fontSize: "50px" }}>Le1</h2>
              <p>
                The Le1 gives students hands-on experience of building a
                renewable electricity supply, able to provide reliable power for
                lighting and mobile-phone charging
              </p>
            </div>
            <Arrow />
            <a href="#videosection">
              <button
                style={{
                  borderStyle: "none",
                  borderRadius: 100,
                  width: 200,
                  height: 200,
                  border: "1px solid #6CCDF2",
                  background: "none",
                  color: "#6CCDF2",
                  margin: 0,
                }}
              >
                See Le1 in action
              </button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Le1Section;
