import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import map from "../media/map.png";
import MailModal from "../components/modal";

function FooterSection() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <footer
      // className={"section"}
      style={{ backgroundColor: "#5D4DC4", width: "100%" }}
    >
      <Container className={"content"} fluid>
        <Row>
          <Col
            className="footer-lft"
            lg={7}
            md={7}
            sm
            style={{ width: "100%", position: "relative", padding: "1%" }}
          >
            <MailModal show={show} onHide={handleClose} />

            <div
              id="ft-links"
              style={{
                width: "40%",
                color: "#fff",
              }}
            >
              <p style={{ marginBottom: "1rem" }}>Useful links</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div id="usef-links">
                  <a href="https://facebook.com/localelectricity">
                    {" "}
                    <p>&#8599; Facebook</p>
                  </a>
                  <a href="https://twitter.com/openenergylabs">
                    {" "}
                    <p>&#8599; Twitter</p>
                  </a>
                  <a href="#">
                    {" "}
                    <p>&#8599; LinkedIn</p>
                  </a>
                  <a href="#">
                    {" "}
                    <p>&#8599; Youtube</p>
                  </a>
                </div>

                <div>
                  <a
                    style={{ color: "#fff", textDecoration: "underline" }}
                    href={"mailto:hello@localelectricity.org"}
                  >
                    Contact Us{" "}
                  </a>
                </div>
              </div>{" "}
            </div>

            <div
              id="ft-copyright"
              style={{
                position: "absolute",
                bottom: "1%",
                color: "#fff",
              }}
            >
              <p style={{ marginBottom: "1rem" }}>
                &#169; Copyright {new Date().getFullYear()}, Open Energy Labs
              </p>
              <p>32/6 Joseph Mwila Rd, Lusaka Zambia</p>
            </div>
          </Col>
          <Col>
            <img width={"100%"} height={"100%"} src={map} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterSection;
