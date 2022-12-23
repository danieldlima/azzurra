import * as React from 'react';

import AboutSection from './components/AboutSection';
import HeroBanner from './components/HeroBanner';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <main className="px-4 lg:px-0">
        <AboutSection />
      </main>
    </>
  );
};

export default Home;
