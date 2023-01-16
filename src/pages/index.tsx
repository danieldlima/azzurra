import * as React from 'react';

import type { HeadFC, PageProps } from 'gatsby';

import Home from '@templates/Home';

import HeadComponent from '@components/HeadComponent';
import Navigation from '@components/Layout/Navigation';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navigation />
      <Home />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <HeadComponent />;
