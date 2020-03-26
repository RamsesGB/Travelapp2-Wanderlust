import React from "react";
import "./LandingPage.css";

function CTABanner() {
  return (
    <div id="CTA" className="CTA-Container">
      <span className="container">
        <h2 className="banner-txt">Find your next adventure.</h2>
        <br></br>
        <h3 className="banner-sub-text">Local experiences by local guides.</h3>
        <br></br>
        <button>Join Now!</button>
      </span>
    </div>
  );
}

export default CTABanner;
