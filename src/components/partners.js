import React from "react";
import common from "../styles/styles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Partners({ logos }) {
  return (
    <div
      id="partnerLogos"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        width: "100%",
        marginTop: "2rem",
        // justifyItems: "start",
        gridGap: 20,
      }}
    >
      {logos &&
        logos.map((logo, index) => {
          return (
            <div
              key={index}
              style={{
                marginBottom: 50,
                width: "100%",
                flexGrow: 0,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <img height={40} src={logo} />
            </div>
          );
        })}
    </div>
  );
}

export default Partners;
