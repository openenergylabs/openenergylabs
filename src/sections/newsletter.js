import React from "react";
import "../styles/newsletter.css";
import Chimp from "../components/mc_form";
import formImage from "../media/ogimage.jpg";
function NewsLetter(props) {
  return (
    <div id="nl-container">
      <div id={"nl-content-wrapper"}>
        <p id="nl-title">Newsletter</p>
        <div className="nl-hr-container">
          <hr className="nl-hr" />
        </div>
        <img src={formImage} height={"100px"} width={"auto"} />
        <div className="nl-hr-container">
          <hr className="nl-hr" />
        </div>
        <Chimp />
      </div>
    </div>
  );
}
export default NewsLetter;
