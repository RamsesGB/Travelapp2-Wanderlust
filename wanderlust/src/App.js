import React from "react";
import LandingPage from "./Components/LandingPage";
import LogIn from "./Components/Login";
import SignUp from "./Components/Sign-Up";
import GuideSignUp from "./Components/GuideOnboarding";
import { Switch, Route, NavLink, Link } from "react-router-dom";
import "./App.css";
import "./Components/Navbar/Nav.css";

function App() {
  return (
    <div className="App">
      {/* ---------------- > NAV Component START */}
      <header className="Header-Container">
        <h1 className="Logo">
          <Link to="/">Wanderlust</Link>
        </h1>
        <nav>
          {/* <NavItem /> */}

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
        </nav>
      </header>
      {/* --------------- > NAV Component END */}

      <Switch>
        <Route path="/BecomeAGuide">
          <GuideSignUp />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/LogIn">
          <LogIn />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
