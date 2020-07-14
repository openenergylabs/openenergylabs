import * as React from "react";

function MenuIcon(props) {
  return (
    <svg width={20} height={20} viewBox="0 0 10 2" fill="none" {...props}>
      <circle
        cx={1}
        cy={1}
        r={1}
        fill={props.color ? props.color : "#7166CF"}
      />
      <circle
        cx={5}
        cy={1}
        r={1}
        fill={props.color ? props.color : "#7166CF"}
      />
      <circle
        cx={9}
        cy={1}
        r={1}
        fill={props.color ? props.color : "#7166CF"}
      />
    </svg>
  );
}

export default MenuIcon;
