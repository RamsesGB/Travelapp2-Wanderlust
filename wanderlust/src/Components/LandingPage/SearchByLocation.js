import React from "react";
import "./LandingPage.css";

function SearchByLocation() {
  return (
    <section id="SearchLocation" className="Location-Container">
      <div>
        <h2>Search by location</h2>
      </div>

      <div className="triPanelBox container">
        <div className="panel container">
          <img alt="activity" src="design-files/ricardo-gomez-angel-987203-unsplash.jpg" />
          <div>
            <p>Colombia</p>
          </div>
        </div>
        <div className="panel container">
          <img alt="activity" src="design-files/tyler-nix-582593-unsplash.jpg" />
          <div>
            <p>Hawaii</p>
          </div>
        </div>
        <div className="panel lastPanel container">
          <img alt="activity" src="design-files/jezael-melgoza-1127048-unsplash.jpg" />
          <div>
            <p>Tokyo</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchByLocation;
