import React, { useState } from "react";

function Horizontal({ color }) {
  return (
    <div
      style={{
        borderBottomColor: color,
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        width: "95%",
        position: "absolute",
        bottom: "5%",
      }}
    ></div>
  );
}

export default Horizontal;
