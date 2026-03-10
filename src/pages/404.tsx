import * as React from 'react';

import { useLocation } from '@reach/router';
import { HeadFC, Link, PageProps, navigate } from 'gatsby';

import { getIsMaintenanceModeEnabled } from '@constant/maintenance';
import { useMaintenanceMode } from '@root/modules/hooks';
import { addClassName } from '@root/modules/utils';

import NotFoundDataEn from '@content/home/en/404-JSON-Content.json';
import NotFoundDataPt from '@content/home/pt/404-JSON-Content.json';

import ContentPage from '@components/ContentPage';
import HeadComponent from '@components/HeadComponent';
import ArrowLeft from '@components/Icons/ArrowLeft';
import MaintenancePage from '@components/MaintenancePage';

const NotFoundPage: React.FC<PageProps> = () => {
  const location = useLocation();
  const isMaintenanceModeEnabled = useMaintenanceMode();

  React.useEffect(() => {
    if (!isMaintenanceModeEnabled) {
      return;
    }

    navigate(
      location.pathname.match(/.*(\/en\/?)/g)
        ? '/en/maintenance/'
        : '/maintenance/',
      { replace: true }
    );
  }, [isMaintenanceModeEnabled, location.pathname]);

  if (isMaintenanceModeEnabled) {
    return (
      <MaintenancePage
        lang={location.pathname.match(/.*(\/en\/?)/g) ? 'en' : 'pt'}
      />
    );
  }

  const isLngEn = /.*(\/en\/?)/g;
  const data = location.pathname.match(isLngEn)
    ? NotFoundDataEn
    : NotFoundDataPt;

  return (
    <ContentPage isDescription={false}>
      <h1 className="mb-10 text-xl sm:text-2x md:text-3xl lg:text-4xl text-center md:text-left font-light text-azzurra-navy-blue">
        <span className="block">{data.title[0]}</span>
        <span className="block text-white font-bold">{data.title[1]}</span>
      </h1>

      <Link
        to={data.link}
        tabIndex={0}
        className={addClassName([
          'inline-block',
          'text-white',
          'p-3',
          'rounded',
          'hover:bg-azzurra-dark-gold',
          'bg-azzurra-gold',
          'ease-in-out',
          'duration-200',
          'cursor-pointer',
          'mb-10',
          'md:mb-0'
        ])}
      >
        <span className={addClassName(['flex', 'items-center', 'gap-4'])}>
          <span>
            <ArrowLeft />
          </span>

          <span>{data.button}</span>
        </span>
      </Link>
    </ContentPage>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () =>
  getIsMaintenanceModeEnabled() ? (
    <HeadComponent title="Azzurra Capital - Maintenance">
      <meta name="robots" content="noindex,nofollow" />
    </HeadComponent>
  ) : (
    <HeadComponent title="Azzurra Capital - Página não encontrada" />
  );
