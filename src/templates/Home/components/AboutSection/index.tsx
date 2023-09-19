import * as React from 'react';

import Container from '@root/components/Layout/Container';

import IcAbout from '@components/Icons/About';
import IcLighthouse from '@components/Icons/Lighthouse';
import GridAboutCard from '@components/Layout/GridAboutCard';

import AboutItem from './components/AboutItem';
import DetailsSectionCompass from './components/DetailsSectionCompass';

interface AboutSectionFeaturesCards {
  id: number;
  title: string;
  description: string;
}

interface AboutSectionFeatures {
  title: string;
  description: string;
  cards: AboutSectionFeaturesCards[];
}
interface AboutSectionContent {
  title: string;
  button: {
    open: string[] | null;
    close: string | null;
  } | null;
  description: string[];
  features: AboutSectionFeatures | null;
}

export interface AboutSectionItem {
  id: string;
  title: string;
  description: string[];
  content: AboutSectionContent | null;
}

export interface AboutSectionProps {
  data: {
    items: AboutSectionItem[];
  };
}

const AboutSection = ({ data }: AboutSectionProps) => {
  if (!data) return null;

  const icons = {
    0: <IcAbout className="w-full" />,
    2: <IcLighthouse className="w-full" />
  };

  return (
    <section id="about">
      <div className="flex flex-col items-center justify-center mobile-landscape:pb-10 pb-20 pt-16 sm:pb-24 sm:pt-12 gap-16">
        {data.items.map(({ id, title, description, content }, idx) => {
          return id !== 'about-compass' ? (
            <AboutItem
              key={id}
              id={id}
              title={title}
              description={description}
              icon={icons[idx as never]}
            >
              {!content ? null : (
                <Container>
                  <GridAboutCard>
                    <div className="grid-in-description mt-8 pr-8 lg:pr-0">
                      <h4 className="text-xl sm:text-2xl font-bold text-azzurra-navy-blue mb-2 sm:mb-4">
                        {content.title}
                      </h4>

                      {content.description?.map((paragraph, idx) => (
                        <p key={idx} className="text-lg leading-6">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </GridAboutCard>
                </Container>
              )}
            </AboutItem>
          ) : (
            <DetailsSectionCompass
              key={id}
              data={{ id, title, description, content }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection;
