import './src/styles/_global.scss';

import './src/styles/_utilities.scss';

import './src/styles/home.module.scss';

export const onClientEntry = () => {
  if (typeof window.__AZZURRA_MAINTENANCE_MODE__ !== 'boolean') {
    window.__AZZURRA_MAINTENANCE_MODE__ = false;
  }
};
