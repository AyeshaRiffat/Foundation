import React from 'react';
import Hero from './Hero'; // Hero Section Component
import FAQSection from './FAQSection'; // FAQ Section Component
import StatsSection from './StatsSection';
import KeyCampaignsSection from './KeyCampaignsSection';
import GallerySection from './GallerySection';
import HeroSection from './HeroSection';
// Import other components here (Stats, Campaigns, etc.)

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <StatsSection/>
      <GallerySection/>
      <FAQSection />
      
      {/* Add other sections like Stats, Campaigns, etc. */}
    </div>
  );
};

export default Home;
