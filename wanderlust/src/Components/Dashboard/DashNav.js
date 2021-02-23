import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import './Dashboard.css';

function DashNav() {
  let match = useRouteMatch();

  return (
    <ul className="Dash-Nav">
      <li>
        <NavLink to={`${match.url}/Profile`}>Profile</NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/AddExperiences`}>Add Experiences</NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/ManageExperiences`}>
          Manage Experiences
        </NavLink>
      </li>
    </ul>
  );
}

export default DashNav;
