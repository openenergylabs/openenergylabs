import React, { useState } from "react";
import OelButton from "../components/button";
import "../styles/herosection.css";
import AngleBracketLeft from "../media/svgComponents/angleBracketLeft";
import AngleBracketRight from "../media/svgComponents/angleBracketRight";
import Logo from "../media/svgComponents/logo";
import VimeoVideo from "../components/vimeoemb";
import cube from "../media/crowdcube.png";
import BracketedText from "../components/bracketedText";
import labbg from "../media/labBg.png";

function Hero() {
  // const [, setShow] = useState(false);
  return (
    <header>
      <div id="hero-contn">
        <div id="hr-aside">
          <div id="hr-notice">
            <p>
              This site uses cookies. <br />
              View our policy →{" "}
              <span className="hr-link-underline">
                <a href="#">Hide notice</a>
              </span>
            </p>
          </div>
          <div id="hr-aside-video">
            <div id="hr-vid-comp">
              <VimeoVideo />
            </div>
            <p>
              Now raising on Crowdcube <br />
              Join the OEL journey →{" "}
              <span className="hr-link-underline">
                <a href="#">Read more</a>
              </span>
            </p>
            <div id="hr-hrnt-cont">
              <hr />
            </div>
            <img id="hr-cube-logo" src={cube} />
          </div>
          <div id="hr-aside-logo-cont">
            <Logo color="#5D4DC4" height={80} />
          </div>
        </div>
        <div id="hr-main">
          <div id="hr-img-sec">
            <img id="hr-labimage-bg" src={labbg} />
            <div id="hr-img-sec-inner">
              <BracketedText height={"100%"}>
                <p>Universal access to electricity through education</p>
              </BracketedText>
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
              <div id="hr-logo-cnt">
                <Logo id="hr-logo" />
              </div>
            </div>
          </div>
          <div className="hr-btm-address">
            <p>
              32/6 Joseph Mwilwa Road, Rhodes Park, <br /> Lusaka — Zambia{" "}
            </p>
          </div>
        </div>
      </div>
      <div id="hr-addr-lg" className="hr-btm-address">
        <p>
          32/6 Joseph Mwilwa Road, Rhodes Park, <br /> Lusaka — Zambia{" "}
        </p>
      </div>
    </header>
  );
}
export default Hero;
