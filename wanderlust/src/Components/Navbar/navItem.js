import React from "react";
import "../../App.css";

function NavItem() {
  return (
    <ul className="LandingPage-Container">
      <li>
        <a href="HomePage">Wanderlust</a>
      </li>
      <li>
        <a href="CTA">Become a Guide</a>
      </li>
      <li>
        <a href="SearchActivity">Search</a>
      </li>
      <li>
        <a href="LoginPage">Log in</a>
      </li>
      <li>
        <a href="SignUp">Sign up</a>
      </li>
    </ul>
  );
}

export default NavItem;
