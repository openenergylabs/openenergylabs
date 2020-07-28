import React, { useState } from "react";
import "../styles/components.css";
function HoverUnderline({
  text = "hello",
  color = "#000",
  onLinkClicked = () => true,
  size = "",
  href = "#"
}) {
  const [hover, setHover] = useState(false);
  const handleLinkHover = () => {
    setHover(!hover);
  };
  return (
    <span className="hu-link-underline">
      <a
        onClick={onLinkClicked}
        name="hideNotice"
        onMouseOut={handleLinkHover}
        onMouseOver={handleLinkHover}
        href={href}
        style={{ color: color, fontSize: size }}
      >
        {text}
      </a>
      <span
        style={{ borderBottom: `${color} 1px solid`, bottom: hover && 0 }}
        className="hu-underline-hover"
      ></span>
    </span>
  );
}
export default HoverUnderline;