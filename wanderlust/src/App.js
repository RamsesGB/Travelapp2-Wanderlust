import React from 'react';
import LandingPage from './Components/LandingPage';
import LogIn from './Components/Login';
import SignUp from './Components/Sign-Up';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar/index.js';
import GuideSignUp from './Components/GuideOnboarding';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './Components/Navbar/Nav.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/BecomeAGuide">
          <GuideSignUp />
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/SignUp">
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
