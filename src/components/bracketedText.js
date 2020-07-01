import React, { Children } from "react";
import AngleBracketLeft from "../media/svgComponents/angleBracketLeft";
import AngleBracketRight from "../media/svgComponents/angleBracketRight";

function BracketedText({ children, height }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
        textAlign: "center",
        height: "100%",
      }}
    >
      <div style={{ height: `${height}rem` }}>
        <AngleBracketLeft />
      </div>
      <div>{children}</div>
      <div style={{ height: `${height}rem` }}>
        <AngleBracketRight />
      </div>
    </div>
  );
}

export default BracketedText;
