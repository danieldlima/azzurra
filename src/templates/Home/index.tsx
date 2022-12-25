import * as React from 'react';

import { HomeProvider } from '@root/modules/providers';

import AboutSection from '@templates/Home/components/AboutSection';
import HeroBanner from '@templates/Home/components/HeroBanner';
import InvestmentPolicySection from '@templates/Home/components/InvestmentPolicySection';
import TeamSection from '@templates/Home/components/TeamSection';

const Home = () => {
  return (
    <HomeProvider>
      <HeroBanner />
      <main>
        <AboutSection />
        <TeamSection />
        <InvestmentPolicySection />
      </main>
    </HomeProvider>
  );
};

export default Home;
