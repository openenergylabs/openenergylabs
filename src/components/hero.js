import React, { useState } from "react";
import OelButton from "./button";
import ButtonGroup from "./buttonGroup";
import MailModal from "./modal";

function Hero() {
  return (
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

      <ButtonGroup
        leftBtnOptions={{
          path: "/",
          color: "#5D4DC4",
          name: "Register to invest",
        }}
        rightBtnOptions={{
          path: "#videosection",
          color: "#5D4DC4",
          name: "Learn more",
        }}
      />
      <div
        style={{
          borderBottom: "1px #5D4DC4 solid",
          width: "95%",
          position: "absolute",
          bottom: "5%",
        }}
      ></div>
    </div>
  );
}
export default Hero;
