import React from "react";


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
      {children}
    </div>
  );
}

export default Partners;
