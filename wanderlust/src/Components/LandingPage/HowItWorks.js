import React from "react";
import "./LandingPage.css";
import S1Icon from "../../Images/undraw_profile_6l1l.svg";
import S2Icon from "../../Images/undraw_travelers_qlt1.svg";
import S3Icon from "../../Images/undraw_High_five_u364.svg";

function HowItWorks() {
  return (
    <section id="HowTo" className="How-Container">
      <div className="title-section">
        <h2 className="Section-title">How it Works</h2>
      </div>
      <div className="card-section">
        <div className="Howto-card">
          <p className="p-steps">1</p>
          <h4>Create An Account</h4>
          <img className="step-icon" src={S1Icon} alt="profile icon" />
          <p>
            Personalize your information and build your network
          </p>
        </div>
        <div className="Howto-card">
          <p className="p-steps">2</p>
          <h4>Find Your Adventure</h4>
          <img className="step-icon mid-icon" src={S2Icon} alt="search icon" />
          <p>
            Search thousands of experiences with curated recommendations
          </p>
        </div>
        <div className="Howto-card">
          <p className="p-steps">3</p>
          <h4>Have an Experience of a Lifetime</h4>
          <img className="step-icon" src={S3Icon} alt="adventure icon" />
          <p>
            Log off and step into the real world. Meet your guide and try
            something new
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
