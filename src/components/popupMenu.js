import React, { useState, useEffect } from "react";
import MenuIcon from "../media/svgComponents/dotsMenu";
import Logo from "../media/svgComponents/logo";
import Horizontal from "./horizontalLIne";
import CloseIcon from "../media/svgComponents/closeIconMobile";

function PopupMenu({ open, children, onClose }) {
  const [navigate, setNavigate] = useState(false);
  const onMenuItemClicked = () => {
    onClose();
    setNavigate(!open);
    console.log("item", open);
  };

  return (
    <div
      className={"font-glyph"}
      style={{
        display: open ? " block" : "none",
        zIndex: 1000,
        height: "100vh",
        width: "100vw",
        background: "#5D4DC4",
        position: "fixed",
      }}
    >
      <div id="pp-menu-inner">
        <div style={{ background: "transparent" }} className="pp-menu-top-nav">
          <div>
            <h2 style={{ color: "#fff" }} className="pp-menu-title">
              Open Energy Labs
            </h2>
          </div>
          <div
            className="em-top-nav-menu-button"
            style={{ cursor: "default", color: "#fff" }}
            onClick={onClose}
          >
            <MenuIcon color={"#fff"} />
          </div>
          <div onClick={onClose} id="mobile-close-btn">
            <CloseIcon />
          </div>
        </div>

        <div
          id="pp-menu-hr"
          style={{
            borderBottom: "0.7px solid #6C5CCB",
            width: "100%",
          }}
        ></div>

        <div id="pp-menu-children">
          <div className="pp-menu-child ">
            <ul id="pp-menu-list">
              <li onClick={onMenuItemClicked}>
                <a href="#updates">
                  <p>Crowdcube</p>
                </a>
              </li>
              <li className="pp-menu-item-saparator">
                {" "}
                <p>|</p>
              </li>
              <li onClick={onMenuItemClicked}>
                <a href="#whatwedo">
                  <p>What we do</p>
                </a>
              </li>
              <li className="pp-menu-item-saparator">
                {" "}
                <p>|</p>
              </li>
              <li onClick={onMenuItemClicked}>
                <a href="#le1">
                  <p>Le1</p>
                </a>
              </li>
              <li className="pp-menu-item-saparator">
                {" "}
                <p>|</p>
              </li>
              <li onClick={onMenuItemClicked}>
                <a href="#newsletter">
                  <p>Newsletter</p>
                </a>
              </li>
              <li className="pp-menu-item-saparator">
                {" "}
                <p>|</p>
              </li>
              <li onClick={onMenuItemClicked}>
                <a href="#partners">
                  <p>Partners & Investers</p>
                </a>
              </li>
              <li className="pp-menu-item-saparator">
                {" "}
                <p>|</p>
              </li>
              <li onClick={onMenuItemClicked}>
                <a href="#footer-section">
                  <p>Contact</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="pp-menu-logo">
          <Logo height={60} />
        </div>
        <div id="pp-menu-copyright">
          <div
            id="pp-menu-hr"
            style={{
              borderBottom: "0.7px solid #6C5CCB",
              width: "100%",
            }}
          ></div>
          <p>32/6 Joseph Mwilwa Road, Rhodes Park, Lusaka — Zambia</p>
        </div>
      </div>
    </div>
  );
}
export default PopupMenu;
