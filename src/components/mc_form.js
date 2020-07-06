import React from "react";
function Chimp() {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://localelectricity.us18.list-manage.com/subscribe/post?u=328c04fd31c51095b1b1cf5a5&id=294299a867"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate form-group"
        target="_blank"
        noValidate
      >
        <div id="mc_form_inner">
          <div id="mc_embed_signup_scroll">
            {/* <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div> */}

            {/* radio buttons */}
            <div id="form-radio" className="input-group">
              {/* <strong>
              Receive crowdfunding info &amp; updates?{" "}
              <span className="asterisk">*</span>
            </strong> */}
              <ul>
                <li>
                  <input
                    type="radio"
                    defaultValue="Yes, please!"
                    className="form-check-input"
                    name="CFUND"
                    id="mce-CFUND-0"
                  />
                  <label htmlFor="mce-CFUND-0">News and updates</label>
                </li>
              </ul>
            </div>

            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                //   defaultValue
                name="EMAIL"
                placeholder="Your email address*"
                className="required email form-control"
                id="mce-EMAIL"
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">
                First Name <span className="asterisk">*</span>
              </label>
              <input
                type="text"
                //   defaultValue
                placeholder="First name"
                name="FNAME"
                className="required form-control"
                id="mce-FNAME"
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Last Name </label>
              <input
                type="text"
                //   defaultValue
                placeholder="Last name"
                name="LNAME"
                className="form-control"
                id="mce-LNAME"
              />
            </div>
            <div className="mc-field-group size1of2">
              <label htmlFor="mce-PHONE">Phone Number </label>
              <input
                type="text"
                name="PHONE"
                placeholder="Phone Number"
                className="form-control"
                //   defaultValue
                id="mce-PHONE"
              />
            </div>
            {/* <div className="mc-field-group input-group">
            <strong>
              Receive crowdfunding info &amp; updates?{" "}
              <span className="asterisk">*</span>
            </strong>
            <ul>
              <li>
                <input
                  type="radio"
                  defaultValue="Yes, please!"
                  className="form-check-input"
                  name="CFUND"
                  id="mce-CFUND-0"
                />
                <label htmlFor="mce-CFUND-0">Yes, please!</label>
              </li>
            </ul>
          </div> */}
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              />
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              />
            </div>
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_328c04fd31c51095b1b1cf5a5_294299a867"
                tabIndex={-1}
                defaultValue
              />
            </div>
          </div>
          {/* horizontal line  */}
          <div className="nl-hr-container">
            <hr className="nl-hr" />
          </div>
          <div className="clear">
            <input
              type="submit"
              defaultValue="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button btn btn-primary"
            />
          </div>
          <div className="nl-hr-container">
            <hr className="nl-hr" />
          </div>
          <div id="form-policy">
            <p>*Open Energy Labs is data responsible</p>
            <a>
              <p id="policy-link">Read our data policy here</p>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Chimp;
