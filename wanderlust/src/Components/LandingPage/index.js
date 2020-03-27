import React from "react";
import "./LandingPage.css";
import Navbar from "../Navbar/index";
import CTABanner from "./CTA-Banner";
import HowItWorks from "./HowItWorks";
import FeaturedExperiences from "./FeaturedExperiences";
import GuideCTA from "./Guide-CTA";
import SearchActivity from './SearchByActivity';
import SearchLocation from './SearchByLocation';

function LandingPage() {
  return (
    <main className="LandingPage-Container">
      <Navbar />
      <CTABanner />
      <HowItWorks />
      <FeaturedExperiences />
      <GuideCTA />
      <SearchActivity />
      <SearchLocation/> 
    </main>
  );
}

export default LandingPage;
