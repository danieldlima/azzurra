import * as React from 'react';

import { HomeProvider } from '@root/modules/providers';

import AboutSection from '@templates/Home/components/AboutSection';
import ContactSection from '@templates/Home/components/ContactSection';
import HeroBanner from '@templates/Home/components/HeroBanner';
import InvestmentPolicySection from '@templates/Home/components/InvestmentPolicySection';
import RegulatoryInformationSection from '@templates/Home/components/RegulatoryInformationSection';
import TeamSection from '@templates/Home/components/TeamSection';

const Home = () => {
  return (
    <HomeProvider>
      <HeroBanner />
      <main>
        <AboutSection />
        <TeamSection />
        <InvestmentPolicySection />
        <RegulatoryInformationSection />
        <ContactSection />
      </main>
    </HomeProvider>
  );
};

export default Home;
