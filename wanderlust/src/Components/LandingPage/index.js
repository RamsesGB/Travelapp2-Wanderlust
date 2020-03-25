import React from 'react';
import './App.css';
import Navbar from '../Navbar/index'

function LandingPage() {
  return (
    <div className="LandingPage-Container">
      <Navbar/>
      <CTA-Banner/>
      <How-it-Works/>
      <Featured-Experiences/>
      <CTA-Banner/>
      <Search-Activity/>
      <Search-Location/>
    </div>
  );
}

export default LandingPage;