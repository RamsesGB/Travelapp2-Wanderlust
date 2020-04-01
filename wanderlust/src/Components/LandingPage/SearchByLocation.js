import React from "react";
import "./LandingPage.css";
import ActIcon1 from "../../Images/teddy-kelley-105544-unsplash.jpg";

function SearchByLocation() {
  return (
    <section id="SearchLocation" className="Location-Container">
      <div>
        <h2>Search by location</h2>
      </div>

      <div className="triPanelBox container">
        <div className="panel container">
          <img alt="activity" src={ActIcon1} />
          <div>
            <p>Colombia</p>
          </div>
        </div>
        <div className="panel container">
          <img alt="activity" src={ActIcon1} />
          <div>
            <p>Hawaii</p>
          </div>
        </div>
        <div className="panel lastPanel container">
          <img alt="activity" src={ActIcon1} />
          <div>
            <p>Tokyo</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchByLocation;
