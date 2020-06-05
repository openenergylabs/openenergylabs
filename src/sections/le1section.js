import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import common from "../styles/styles";
import MailModal from "../components/modal";
import Le1 from "../media/svgComponents/Le1";

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
        style={{
          height: "100%",
          ...common.centerItemsVt,
        }}
      >
        <h3 className="font-glyph" style={{ margin: "5%", fontSize: "50px" }}>
          The world’s first learnable charge controller
        </h3>
        <Row
          style={{
            height: "100%",
          }}
        >
          <Col
            style={{
              position: "relative",
            }}
            sm
            lg={7}
          >
            {/* <img
              style={{
                maxWidth: "100%",
                height: "100%",
                position: "absolute",
                bottom: 0,
              }}
              src={le1}
            /> */}

            <Le1 style={{ width: "100%" }} />
          </Col>
          <Col
            id="le1-intro-col2"
            sm
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
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
            <a href="#videosection">
              <button
                style={{
                  borderStyle: "none",
                  borderRadius: 70,
                  width: 120,
                  height: 120,
                  border: "1px solid #6CCDF2",
                  background: "none",
                  color: "#6CCDF2",
                  margin: 30,
                }}
              >
                See Le1 in action
              </button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Le1Section;
