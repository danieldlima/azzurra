import * as React from 'react';

import { getIsMaintenanceModeEnabled } from '@constant/maintenance';

export const useMaintenanceMode = () => {
  const [isMaintenanceModeEnabled, setIsMaintenanceModeEnabled] =
    React.useState(getIsMaintenanceModeEnabled);

  React.useEffect(() => {
    setIsMaintenanceModeEnabled(getIsMaintenanceModeEnabled());
  }, []);

  return isMaintenanceModeEnabled;
};
