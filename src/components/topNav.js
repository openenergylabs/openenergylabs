import React, { useState } from "react";
import PopupMenu from "./popupMenu";
import OelButton from "./button";
import MenuIcon from "../media/svgComponents/dotsMenu";
import Logo from "../media/svgComponents/logo";
function TopNav() {
  const [open, setOpen] = useState(false);
  const openHandler = (e) => {
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
        <div id="em-tn-title-cnt">
          <h2 className="em-tn-title">Open Energy Labs</h2>
        </div>
        <div id="em-menu-btns">
          {/* <div> */}
          <OelButton
            name="Invest now"
            hideAnt
            outline
            color="#5D4DC4"
            textColor="#5D4DC4"
            path="https://www.crowdcube.com/companies/open-energy-labs/pitches/b6nMpb"
          />
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
