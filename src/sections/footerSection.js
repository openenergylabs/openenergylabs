import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import map from "../media/map.png";
import MailModal from "../components/modal";
import Logo from "../media/svgComponents/logo";
import "../styles/footer.css";
import OelMap from "../components/map";

function FooterSection() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <footer
      // className={"section"}
      id="footer-section"
      style={{ backgroundColor: "#FFFFFE", width: "100%" }}
    >
      <Container className={"content"} fluid>
        <div id="ftr-content-wrapper">
          <p id="ftr-title">Open Energy Labs</p>

          <div id="ftr-map">
            {/* <img width={"100%"} height={"100%"} src={map} /> */}
            <OelMap />
          </div>
          <div id="ftr-logo-and-socials-container">
            <p id="ftr-address">
              Open Energy Labs <br />
              32/6 Joseph Mwila Road <br />
              Rhodes park, <br />
              Lusaka — Zambia
            </p>

            <div id={"ftr-logo"}>
              <Logo color={"#5D4DC4"} height={100} />
            </div>

            <div id="ftr-socials">
              <a href="https://facebook.com/openenergylabs">
                <p>&#8599; Facebook</p>
              </a>
              <a href="https://twitter.com/openenergylabs">
                <p>&#8599; Twitter</p>
              </a>
              <a href="https://www.linkedin.com/company/openenergylabs/">
                <p>&#8599; LinkedIn</p>
              </a>
              <a href="https://www.youtube.com/channel/UCIlPJfPOl-9aHnESa_MxBPg">
                <p>&#8599; Youtube</p>
              </a>
              <a href="https://www.instagram.com/openenergylabs/">
                <p>&#8599; Instagram</p>
              </a>
            </div>
            <div id="ftr-hr-cont" style={{ width: "100%" }}>
              <hr id={"ftr-hr"} />
            </div>

            <ul id={"ftr-cta-links"}>
              <li>
                <p>Contact us</p>
              </li>
              <li>
                <p>Newsletter</p>
              </li>
              <li>
                <p>Terms</p>
              </li>
              <li>
                <p>Credits</p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div id="ftr-copyright">
        <p>&#169; Copyright {new Date().getFullYear()}, Open Energy Labs</p>
      </div>
    </footer>
  );
}

export default FooterSection;
