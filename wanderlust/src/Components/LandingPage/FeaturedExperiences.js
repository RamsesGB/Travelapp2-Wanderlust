import React from "react";
import "./LandingPage.css";

function FeaturedExperiences() {
  return (
    <section id="FeatExp" className="Experiences-Container">
      <div className="cardBox container">
        <div className="card card1 container">
            <h4>Sky Bridge Hike</h4>
            <img alt="activity" className="img1" src="#"/>
            <p>Come on the famous sky bridge hike and have your picture taken along the way.</p>
            <button className="viewBtn">View Details</button>
        </div>
        <div className="card card2 container">
            <h4>Food Tour</h4>
            <img alt="activity" className="img1" src="#"/>
            <p>Five restaurants in two hours to explore culinary gems around the city.</p>
            <button className="viewBtn">View Details</button>
        </div>
        <div className="card card3 container">
            <h4>Academic Dinner Party</h4>
            <img alt="activity" className="img1 uniqImg" src="#"/>
            <p>Join 11 of the top academics from the University of Oxford for a casual dinner and conversation.</p>
            <button className="viewBtn">View Details</button>
        </div>
        <div className="card card4 container">
            <h4>Picnic at Mary's Lake</h4>
            <img alt="activity" className="img1" src="#"/>
            <p>Wine and cheese by the lake. Bring a freind, meet new people, and enjoy the scenery.</p>
            <button className="viewBtn">View Details</button>
        </div>
        <div className="card card5 container">
            <h4>Karoake Night</h4>
            <img alt="activity" className="img1" src="#"/>
            <p>A night of karoake, food, and drinks!</p>
            <button className="viewBtn">View Details</button>
        </div>
        <div className="card card6 container">
            <h4>Locals Only Surf Club</h4>
            <img alt="activity" className="img1" src="#"/>
            <p>Get a guided experience to surf the secret shore at bonos beach.</p>
            <button className="viewBtn">View Details</button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedExperiences;
