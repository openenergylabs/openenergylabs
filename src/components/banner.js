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
        position: "absolute",
        gridTemplateColumns: "10fr 1fr",
        backgroundColor: "#942202",
        zIndex: 999,
        width: "100%",
        height: "60px",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <div>
        <p
          style={{
            color: "#FDE3CA",
            margin: "0 0 0 20px",
            display: "inline-block",
          }}
        >
          We’re raising investment soon on Crowdcube →
          <span>
            {" "}
            <a
              style={{
                color: "#FDE3CA",
                margin: 2,
                textDecoration: "underline",
              }}
              href="#videosection"
            >
              Learn more.
            </a>
          </span>
        </p>
      </div>
      <CLoseIcon onClick={handleClick} style={{ color: "#FDE3CA" }} />
    </div>
  );
}
export default Banner;
