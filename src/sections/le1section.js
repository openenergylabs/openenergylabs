import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import common from "../styles/styles";
import MailModal from "../components/modal";
import Le1 from "../media/svgComponents/Le1";
import BracketedText from "../components/bracketedText";
import "../styles/le1section.css";
import OelButton from "../components/button";

function Le1Section() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <section
      // id="le1section"
      className={"section"}
      style={{
        backgroundColor: "#5D4DC4",
        color: "#fff",
      }}
    >
      <MailModal show={show} onHide={handleClose} />
      <div
        id={"le1-main-wrapper"}
        className="content"
        style={{
          height: "100%",
          ...common.centerItemsVt,
        }}
      >
        <div id="le1-copy-wrapper">
          {/* left le1 image*/}
          <div>
            <div id="le1-img-cont">
              <Le1
                style={{
                  height: "auto",
                  width: "100%",
                  position: "relative",
                  left: "-50px",
                }}
              />
            </div>
          </div>
          {/* right intro text  */}
          <div
            id="le1-intro-text"
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
                width: "90%",
                height: "100%",
              }}
            >
              <p id="le1-product-name">Le1</p>
              <div id="le1-bracketed-text">
                <BracketedText height={5}>
                  <p style={{ fontSize: "15px", margin: 0 }}>
                    Teaching students how to build and maintain a renewable
                    energy supply.
                  </p>
                </BracketedText>
              </div>
              <p id="le1-desc-text">
                The Le1 gives students hands-on experience of building a
                renewable electricity supply, able to provide reliable power for
                lighting and mobile-phone charging.
              </p>
              {/* action buttons */}
              <div id="le1-action-buttons">
                <OelButton
                  outline
                  hideAnt
                  name="Visit EMA website"
                  color="#fff"
                  textColor="#fff"
                />
                <OelButton
                  outline
                  hideAnt
                  name="Graduate spotlight"
                  color="#fff"
                  textColor="#fff"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Le1Section;
