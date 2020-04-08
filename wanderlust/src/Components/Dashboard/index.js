import React from "react";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
// import "./App.css";

function Dashboard() {
  let match = useRouteMatch();

  return (
    <div className="App">
      {/* ---------------- > Dashboard links START */}
      <ul className="Nav-Container">
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

      {/* --------------- > Dashboard links END */}

      <Switch>
        <Route>{/* Dashboard components */}</Route>
      </Switch>
    </div>
  );
}

export default Dashboard;
