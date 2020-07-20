import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import OelMarker from "../media/svgComponents/marker";
import { mapStyles } from "../styles/mapstyles";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function OelMap({ center, zoom }) {
  return (
    <div id="mapStyle" style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAIm5GstyNthUrJy4UjPCEGLDMlMDo6IY8" }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={{ styles: mapStyles }}
      >
        <OelMarker lat={-15.407269} lng={28.294508} />
      </GoogleMapReact>
    </div>
  );
}

OelMap.defaultProps = {
  center: {
    lat: -15.407269,
    lng: 28.2945083,
  },
  zoom: 14,
};
export default OelMap;
