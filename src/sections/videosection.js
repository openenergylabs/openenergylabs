import React, { useState } from "react";

import OelButton from "../components/button";
import VimeoVideo from "../components/vimeoemb";
import "../styles/videosection.css";
import VideoSectionBg from "../media/svgComponents/videoSectionBackground";

function VideoSection() {
  const [, setShow] = useState(false);

  return (
    <section
      id="updates"
      className={"section"}
      style={{
        backgroundColor: "#5D4DC4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <div id={"vs-background"}>
        <VideoSectionBg />
      </div> */}
      <div id="vs-content-wrapper" style={{ background: "#FF7F48" }}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <p id="vs-title"> We raised £120K on Crowdcube</p>
          <hr id="vs-hr" style={{ borderColor: "#FF8A58" }} />
        </div>
        <div id="vs-content-inner-wrapper">
          <div id="vs-video-wrapper" style={{}}>
            <p>Watch our campaign video</p>
            <VimeoVideo />
          </div>
          <div id="vl"></div>
          <div id="vs-btn-copy-wrapper">
            <p
              style={{ textAlign: "center", fontSize: "12px", margin: "20px" }}
            >
              Invested in our vision
            </p>
            <p style={{ textAlign: "center", margin: "20px" }}>
              To develop technology and deliver our programme to 110,000
              students in Zambia, we opened a crowd investment round. 
              Click through to see why over 300 people invested.
            </p>

            <div id="vs-actn-btn">
              <OelButton
                hideAnt
                path="https://www.crowdcube.com/companies/open-energy-labs/pitches/b6nMpb"
                color={"#942202"}
                textColor="#FF9359"
                name={"See our campaign"}
                target={"_blank"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
