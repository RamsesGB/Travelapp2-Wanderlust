import React from "react";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import "../../App.css";
import "./Dashboard.css"

function Dashboard() {
  let match = useRouteMatch();

  return (
    <div className="Dash-Container">
      {/* ---------------- > Dashboard links START */}
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

      {/* Dashboard components */}
      <Switch>
        <Route path={`${match.path}/Profile`}>
          <Profile />
        </Route>
        <Route path={`${match.path}/AddExperiences`}>
          <AddExp />
        </Route>
        <Route path={`${match.path}/ManageExperiences`}>
          <ManageExp />
        </Route>
        <Route exact path={match.path}>
          <h4>
            Welcome to your Dashboard<br></br> Edit your profile and manage your
            experiences
          </h4>
        </Route>
      </Switch>
    </div>
  );
}

export default Dashboard;
