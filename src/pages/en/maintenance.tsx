import * as React from 'react';

import type { HeadFC, PageProps } from 'gatsby';

import HeadComponent from '@components/HeadComponent';
import MaintenancePage from '@components/MaintenancePage';

const MaintenanceRoutePage: React.FC<PageProps> = () => {
  return <MaintenancePage lang="en" />;
};

export default MaintenanceRoutePage;

export const Head: HeadFC = () => (
  <HeadComponent title="Azzurra Capital - Maintenance">
    <meta name="robots" content="noindex,nofollow" />
  </HeadComponent>
);
