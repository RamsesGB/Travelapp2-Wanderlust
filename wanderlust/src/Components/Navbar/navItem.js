import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";


function NavItem() {
  return (
    <ul className="Nav-Container">
      <li>
        <NavLink to="/BecomeAGuide">Become a Guide</NavLink>
      </li>
      <li>
        <NavLink to="/Search">Search</NavLink>
      </li>
      <li>
        <NavLink to="/LogIn">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/SignUp">Sign Up</NavLink>
      </li>
    </ul>
  );
}

export default NavItem;

