import React, { useState } from "react";
import PopupMenu from "./popupMenu";
import OelButton from "./button";
import MenuIcon from "../media/svgComponents/dotsMenu";
function TopNav() {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(!open);
  };
  return (
    <div>
      <PopupMenu
        open={open}
        onClose={() => {
          setOpen(!open);
          console.log("onMenu", open);
        }}
      ></PopupMenu>
      <div className="em-top-nav">
        <div id="spacer"></div>
        <div id="em-tn-title-cnt">
          <h2 className="em-tn-title">Open Energy Labs</h2>
        </div>
        <div id="em-menu-btns">
          {/* <div> */}
          
          {/* </div> */}
          <div
            onClick={openHandler}
            className="em-top-nav-menu-button"
            style={{ cursor: "default" }}
          >
            <MenuIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopNav;
