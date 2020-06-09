import React from "react";
import common from "../styles/styles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Partners({ children }) {
  return (
    <div
      id="partnerLogos"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        width: "100%",
        maxWidth: "1118px",
        marginTop: "2rem",
        justifyItems: "start",
        alignItems: "center",
        // columnGap: 20,
        gridGap: 50,
      }}
    >
      {/* {logos &&
        logos.map((logo, index) => {
          return (
            <div
              key={index}
              style={{
                margin: 5,
                // flexGrow: 0,
                // justifyContent: "center",
                // alignItems: "center",
                // display: "flex",
              }}
            >
              <img width="auto" height={"auto"} src={logo} />
            </div>
          );
        })} */}

      {children}
    </div>
  );
}

export default Partners;
