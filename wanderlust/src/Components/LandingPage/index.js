import React from 'react';
import './LandingPage.css';
import Navbar from '../Navbar/index';
import CTABanner from './CTA-Banner';
// import HowItWorks from './HowItWorks';
// import FeaturedExperiences from './FeaturedExperiences';
// import CTA-Guide from '';
// import SearchActivity from './SearchByActivity';
// import SearchLocation from './SearchByLocation';



function LandingPage() {
  return (
    <div className="LandingPage-Container">
      <Navbar/>
      <CTABanner/>
      {/* <HowItWorks/>
      <FeaturedExperiences/>
      <CTABanner/>
      <SearchActivity/>
      <SearchLocation/> */}
    </div>
  );
}

export default LandingPage;