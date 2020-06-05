import React from "react";
import Button from "react-bootstrap/Button";

function OelButton({ name, color, path, onPressed, hideAnt }) {
  const onButtonPressed = (e) => {
    if (onPressed) {
      onPressed();
    }
    return;
  };
  return (
    <a
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
      }}
      href={path}
    >
      <div
        style={{
          display: "flex",
          visibility: hideAnt && "hidden",
          width: 50,
          justifyContent: "space-between",
        }}
      >
        <span
          className="oel-btn-antena"
          style={{
            ...buttonStyles.oelAntena,
            borderColor: color,
          }}
        ></span>
        <span
          className="oel-btn-antena"
          style={{
            ...buttonStyles.oelAntena,
            borderColor: color,
          }}
        ></span>
        <span
          className="oel-btn-antena"
          style={{
            ...buttonStyles.oelAntena,
            borderColor: color,
          }}
        ></span>
      </div>
      <Button
        onClick={onPressed}
        className="oelbtn"
        variant={"outline-primary"}
        style={{
          borderRadius: 20,
          margin: 0,
          color: color,
          borderColor: color,
        }}
      >
        {name}
      </Button>
    </a>
  );
}

const buttonStyles = {
  oelAntena: {
    display: "inline-block",
    height: 10,
    borderLeft: "1px solid",
    lineHeight: 0,
    position: "relative",
    bottom: -1,
  },
};

OelButton.defaultProps = {};
export default OelButton;
