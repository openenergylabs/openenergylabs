import * as React from "react";

function VimeoVideo() {
  return (
    <iframe
      id="videoFrame"
      src="https://player.vimeo.com/video/425909940"
      width={"auto"}
      height={"auto"}
      frameBorder={0}
      allow="autoplay; fullscreen"
      allowFullScreen
      title="Crowdcube campaign video"
      data-ready="true"
      style={{ width: "100%" }}
    />
  );
}

export default VimeoVideo;
