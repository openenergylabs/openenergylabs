import React, { useState } from "react";
import OelButton from "../components/button";
import MailModal from "../components/modal";
import Horizontal from "../components/horizontalLIne";
import "../styles/herosection.css";
import AngleBracketLeft from "../media/svgComponents/angleBracketLeft";
import AngleBracketRight from "../media/svgComponents/angleBracketRight";
import logo from "../media/logo192.png";
import Logo from "../media/svgComponents/logo";

function Hero() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <header id="hero-contn">
      <div id="hr-img-sec">
        <div id="hr-img-sec-inner">
          <div id="leftbrkt">
            <AngleBracketLeft />
          </div>
          <p>Universal access to electricity through education</p>
          <div id="rightbrkt">
            <AngleBracketRight />
          </div>
        </div>
      </div>
      <div id="hr-logobtn-sec">
        <div id="hr-logobtn-sec-inner">
          <ul id="actn-btns-ls">
            <li>
              <OelButton
                hideAnt
                name="find out"
                color="#6C5DC9"
                textColor="#fff"
              />
            </li>
            <li>
              <OelButton hideAnt name="Get in touch" color="#6C5DC9" />
            </li>
            <li>
              <OelButton hideAnt name="holder" color="#6C5DC9" />
            </li>
          </ul>
          <div>
            <Logo id="hr-logo" />
          </div>
        </div>
      </div>
      <div id="hr-btm-address">
        <p>
          32/6 Joseph Mwilwa Road, Rhodes Park, <br /> Lusaka — Zambia{" "}
        </p>
      </div>
    </header>
  );
}
export default Hero;
