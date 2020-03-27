import React from "react";
import "./LandingPage.css";

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
            <img alt="activity" src="design-files/lachlan-gowen-787977-unsplash.jpg" />
            <div>
              <p>London Proper</p>
            </div>
          </div>
          <div className="panel container">
            <img alt="activity" src="design-files/jonas-hoss-1354891-unsplash.jpg" />
            <div>
              <p>Historic Italy</p>
            </div>
          </div>
          <div className="panel lastPanel container">
            <img alt="activity" src="design-files/shea-rouda-471295-unsplash.jpg" />
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
            <img alt="activity" src="design-files/berkay-akbulut-1276360-unsplash.jpg" />
            <div>
              <p>Sky Dive Lesson</p>
            </div>
          </div>
          <div className="panel container">
            <img alt="activity" src="design-files/larisa-birta-577898-unsplash.jpg" />
            <div>
              <p>Nature Walk</p>
            </div>
          </div>
          <div className="panel lastPanel container">
            <img alt="activity" src="design-files/kristina-wagner-357533-unsplash.jpg" />
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
            <img alt="activity" src="design-files/marc-babin-716173-unsplash.jpg" />
            <div>
              <p>Dinner Party</p>
            </div>
          </div>
          <div className="panel container">
            <img alt="activity" src="design-files/kelsey-chance-575535-unsplash.jpg" />
            <div>
              <p>Cooking Class</p>
            </div>
          </div>
          <div className="panel lastPanel container">
            <img alt="activity" src="design-files/abhishek-sanwa-limbu-782224-unsplash.jpg" />
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
