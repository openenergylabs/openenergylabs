import * as React from "react";

function VimeoVideo() {
  return (
    <iframe
      src="https://player.vimeo.com/video/425909940"
      width={600}
      height={300}
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
