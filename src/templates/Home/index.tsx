import * as React from 'react';

import { HomeProvider } from '@root/modules/providers';

import AboutSection from './components/AboutSection';
import HeroBanner from './components/HeroBanner';

const Home = () => {
  return (
    <HomeProvider>
      <HeroBanner />
      <main>
        <AboutSection />
      </main>
    </HomeProvider>
  );
};

export default Home;
