import React from "react";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import Profile from "./Profile";
import AddExp from "./AddExperience";
import ManageExp from "./ManageExperience";

import "../../App.css";
import "./Dashboard.css";

function Dashboard() {
  let match = useRouteMatch();

  return (
    <section className="Dash-Section">
      <div className="Dash-Container">
        {/* Dashboard Nav Links */}
        <ul className="Dash-Nav">
          <li>
            <NavLink to={`${match.url}/Profile`}>Profile</NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/AddExperiences`}>
              Add Experiences
            </NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/ManageExperiences`}>
              Manage Experiences
            </NavLink>
          </li>
        </ul>

        {/* Dashboard components */}
        <Switch className="Dash-ActiveView">
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
            <h4 className="Default-View">
              Welcome to your Dashboard<br></br> Edit your profile and manage
              your experiences
            </h4>
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default Dashboard;
