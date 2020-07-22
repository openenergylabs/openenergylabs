import React from "react";
import "../styles/newsletter.css";
import Chimp from "../components/mc_form";
import formImage from "../media/newsletterBg.jpg";

function NewsLetter(props) {
  return (
    <div id="newsletter">
      <div id={"nl-content-wrapper"}>
        <p id="nl-title">Newsletter</p>
        <div className="nl-hr-container">
          <hr className="nl-hr" />
        </div>
        <div id="nl-image-form-wrapper">
          <div id="nl-img-cont">
            <img id="nl-image" src={formImage} />
          </div>
          <div className="nl-hr-container">
            <hr className="nl-hr" />
          </div>
          <Chimp />
        </div>
      </div>
    </div>
  );
}
export default NewsLetter;
