import * as React from 'react';

import type { RenderBodyArgs } from 'gatsby';

import { isMaintenanceModeEnabledFromEnv } from './src/constant/maintenance';

export const onRenderBody = ({
  setBodyAttributes,
  setPreBodyComponents
}: RenderBodyArgs) => {
  setBodyAttributes({
    className: 'scroll-smooth'
  });

  setPreBodyComponents([
    <script
      key="maintenance-mode-flag"
      dangerouslySetInnerHTML={{
        __html: `window.__AZZURRA_MAINTENANCE_MODE__ = ${JSON.stringify(
          isMaintenanceModeEnabledFromEnv
        )};`
      }}
    />
  ]);
};
