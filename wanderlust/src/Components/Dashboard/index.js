import React from 'react';
import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';
import Profile from './Profile';
import AddExp from './AddExperience';
import ManageExp from './ManageExperience';
import './Dashboard.css';
import DashNav from './DashNav';

function Dashboard() {
  let match = useRouteMatch();

  return (
    <section className="Dash-Section">
      <div className="Dash-Container">
        {/* Dashboard Nav Links */}
        <DashNav />

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
            <section className="Default-View">
              <h4>
                Welcome to your Dashboard<br></br> Edit your profile and manage
                your experiences
              </h4>
            </section>
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default Dashboard;
