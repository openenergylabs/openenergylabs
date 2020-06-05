import React, { useState, useEffect, useCallback } from "react";
import Layout from "./components/layout";
import "./App.css";
import Hero from "./components/hero";
import mVideo from "./media/Down_by_the_River.mp4";
import OelButton from "./components/button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import common from "./styles/styles";
import ButtonGroup from "./components/buttonGroup";
import ReactPlayer from "react-player";
import Vimeo from "@u-wave/react-vimeo";
// image imports
import logo from "./media/logo192.png";
import map from "./media/map.png";
import learningIcon from "./media/Learning.png";
import energyIcon from "./media/Energy.png";
import captureIcon from "./media/Capture.png";
import le1 from "./media/Le1.png";
// partners logos
import bcv from "./media/bcv.png";
import eps from "./media/eps.png";
import fik from "./media/fik.png";
import uik from "./media/uik.png";
import Partners from "./components/partners";
import MailModal from "./components/modal";

// TODO: Change favicon OEL

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Layout>
      <div className="App">
        <MailModal show={show} onHide={handleClose} />
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
            <h1 className={"hdr-text font-glyph"}>Open Energy Labs</h1>
            <p className="sub-hdr-text font-glyph">
              Universal access to electricity through education
            </p>
            {/* <div style={{ margin: "5%", position: "absolute", bottom: "15%" }}>
        <OelButton name="What we do"></OelButton>
        <OelButton name="What we do"></OelButton>
      </div> */}

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
        {/* Campaign video */}
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
            <p style={{ alignSelf: "flex-end", color: "#fff" }}>
              Watch our Crowdcube campaign video
            </p>

            <Vimeo height={500} video="https://vimeo.com/425909940" />

            <div
              className="buttonGrp"
              style={{ marginTop: "3rem", marginBottom: "1rem" }}
            >
              <OelButton
                path="#whatwedo"
                color="#fff"
                name="what we do"
                hideAnt={true}
              />
              <OelButton
                onPressed={handleShow}
                color={"#fff"}
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
              borderBottom: "1px #fff solid",
              width: "95%",
              position: "absolute",
              bottom: "5%",
            }}
          ></div>
        </section>

        {/* What we do  */}

        <section
          id="whatwedo"
          className="section"
          style={{
            ...common.centerItemsVt,
            backgroundColor: "#FEA90E",
            paddingTop: "10%",
            paddingBottom: "10%",
          }}
        >
          <h3 className="section-title font-glyph">What we do</h3>
          <Row className={"services"}>
            <Col sm className="service-item">
              <img src={learningIcon} alt="image" />
              <p className="service-title font-glyph">Energy Makers Academy</p>
              <p className="service-sub">
                We teach students through a “learn by making” approach,
                providing them with the skills and knowledge to develop
                universal access to electricity.
              </p>
            </Col>
            <Col sm className="service-item font-glyph">
              <img src={captureIcon} alt="image" />
              <p className="service-title">Energy Development Toolkits</p>
              <p className="service-sub">
                Our mobile learning platform and integrated hardware demystifies
                energy systems, and offers powerful capabilities for their
                design.
              </p>
            </Col>
            <Col sm className="service-item font-glyph">
              <img src={energyIcon} alt="image" />
              <p className="service-title">Reduce Energy Poverty</p>
              <p className="service-sub">
                We empower and inspire people and communities to innovate
                towards affordable, reliable and sustainable energy systems.
              </p>
            </Col>
          </Row>
          <div
            className="buttonGrp"
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            <OelButton
              path="#le1section"
              color="#5D4DC4"
              name="Our first product"
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
        </section>

        {/* Introducing our first product */}
        <section
          id="le1section"
          className={"section"}
          style={{
            backgroundColor: "#0600FF",
            color: "#6CCDF2",
          }}
        >
          <Container
            style={{
              height: "100%",
              ...common.centerItemsVt,
            }}
          >
            <h3
              className="font-glyph"
              style={{ margin: "5%", fontSize: "50px" }}
            >
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
                <img
                  style={{
                    maxWidth: "100%",
                    height: "100%",
                    position: "absolute",
                    bottom: 0,
                  }}
                  src={le1}
                />
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
                  <p style={{ fontSize: "25px" }}>
                    Introducing our first product
                  </p>
                  <h2 style={{ fontSize: "50px" }}>Le1</h2>
                  <p>
                    The Le1 gives students hands-on experience of building a
                    renewable electricity supply, able to provide reliable power
                    for lighting and mobile-phone charging
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

        {/* partners */}
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
          <Container
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
                className="font-glyph"
                style={{
                  textAlign: "center",
                  color: "#5D4DC4",
                  fontSize: "64px",
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
            <Partners logos={[eps, fik, uik, bcv, eps]} />
            <Partners logos={[eps, uik, fik, bcv, eps]} />
            <Partners logos={[fik, uik, eps, bcv, eps]} />
            <div style={{ marginTop: 25 }}>
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
              {/* <div
                style={{
                  borderBottom: "1px #5D4DC4 solid",
                  width: "95%",
                  position: "absolute",
                  bottom: "5%",
                }}
              ></div> */}
            </div>
          </Container>
        </section>

        <footer
          // className={"section"}
          style={{ backgroundColor: "#5D4DC4", width: "100%" }}
        >
          <Container fluid>
            <Row>
              <Col
                className="footer-lft"
                lg={7}
                md={7}
                sm
                style={{ width: "100%", position: "relative", padding: "1%" }}
              >
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
                    &#169; Copyright {new Date().getFullYear()}, Open Energy
                    Labs
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
      </div>
    </Layout>
  );
}

export default App;
