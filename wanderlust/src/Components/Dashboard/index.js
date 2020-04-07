import React from "react";
import { Switch, Route, NavLink, Link } from "react-router-dom";
// import "./App.css";

function Dashboard() {
  return (
    <div className="App">
      {/* ---------------- > Dashboard links START */}

      {/* --------------- > Dashboard links END */}

      <Switch>
        <Route>{/* Dashboard components */}</Route>
      </Switch>
    </div>
  );
}

export default Dashboard;
