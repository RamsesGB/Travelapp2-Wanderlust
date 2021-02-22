import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function NavItem() {
  return (
    <ul className="Nav-Container">
      <li>
        <NavLink to="/BecomeAGuide">Become a Guide</NavLink>
      </li>
      {/* TO-DO : Conditionally render Dashboard link. Depending on user status and type. */}
      <li>
        <NavLink to="/Dashboard">Dashboard</NavLink>
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
