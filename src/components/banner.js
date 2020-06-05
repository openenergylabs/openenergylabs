import * as React from "react";
import CLoseIcon from "../media/svgComponents/XcloseIcon";

function Banner(props) {
  const [close, setClose] = React.useState(false);

  const handleClick = () => {
    setClose(true);
  };
  return (
    <div
      style={{
        display: "grid",
        visibility: close && "hidden",
        position: "fixed",
        gridTemplateColumns: "auto 40px",
        backgroundColor: "#942202",
        zIndex: 999,
        width: "100%",
        height: "50px",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <div>
        <p style={{ color: "#FDE3CA", margin: 0, display: "inline-block" }}>
          We’re raising investment soon on Crowdcube →
        </p>
        <a
          style={{ color: "#FDE3CA", margin: 2, textDecoration: "underline" }}
          href="#videosection"
        >
          Learn more.
        </a>
      </div>
      <CLoseIcon onClick={handleClick} style={{ color: "#FDE3CA" }} />
    </div>
  );
}
export default Banner;
