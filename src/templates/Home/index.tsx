import * as React from 'react';

import { HomeProvider } from '@root/modules/providers';

import AboutSection from '@templates/Home/components/AboutSection';
import ContactSection from '@templates/Home/components/ContactSection';
import Footer from '@templates/Home/components/Footer';
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
        <section id="investment">
          <InvestmentPolicySection />
          <RegulatoryInformationSection />
        </section>
        <ContactSection />
      </main>
      <Footer />
    </HomeProvider>
  );
};

export default Home;
