import React from "react";
import "./LandingPage.css";
import ActIcon1 from "../../Images/teddy-kelley-105544-unsplash.jpg";


function SearchByActivity() {
  return (
    <section className="Activity-container">
      <div>
        <h2>Search by Activity</h2>
      </div>

      <div className="categoryContainer container">
        <div className="categoryTitle">
          <h3>City Tours</h3>
        </div>

        <div className="triPanelBox container">
          <div className="panel container">
            <img alt="activity" src={ActIcon1} />
            <div>
              <p>London Proper</p>
            </div>
          </div>
          <div className="panel container">
            <img alt="activity" src={ActIcon1} />
            <div>
              <p>Historic Italy</p>
            </div>
          </div>
          <div className="panel lastPanel container">
            <img alt="activity" src={ActIcon1} />
            <div>
              <p>Downtown Denver</p>
            </div>
          </div>
        </div>
      </div>

      <div className="categoryContainer container">
        <div className="categoryTitle">
          <h3>Outdoor Adventures</h3>
        </div>

        <div className="triPanelBox container">
          <div className="panel container">
            <img alt="activity" src={ActIcon1} />
            <div>
              <p>Sky Dive Lesson</p>
            </div>
          </div>
          <div className="panel container">
            <img alt="activity" src={ActIcon1} />
            <div>
              <p>Nature Walk</p>
            </div>
          </div>
          <div className="panel lastPanel container">
            <img alt="activity" src={ActIcon1} />
            <div>
              <p>Angel's Landing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="categoryContainer container">
        <div className="categoryTitle">
          <h3>Food & Drink</h3>
        </div>

        <div className="triPanelBox container">
          <div className="panel container">
            <img alt="activity" src={ActIcon1} />
            <div>
              <p>Dinner Party</p>
            </div>
          </div>
          <div className="panel container">
            <img alt="activity" src={ActIcon1} />
            <div>
              <p>Cooking Class</p>
            </div>
          </div>
          <div className="panel lastPanel container">
            <img alt="activity" src={ActIcon1} />
            <div>
              <p>Handmade Dumplings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchByActivity;
