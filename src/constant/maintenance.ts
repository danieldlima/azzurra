declare global {
  interface Window {
    __AZZURRA_MAINTENANCE_MODE__?: boolean;
  }
}

const getMaintenanceModeFromEnvFile = () => {
  if (typeof window !== 'undefined') {
    return false;
  }

  try {
    // Use Node APIs only during SSR/build so the browser bundle stays clean.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require('fs');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const path = require('path');
    const envFilePath = path.resolve(process.cwd(), '.env');

    if (!fs.existsSync(envFilePath)) {
      return false;
    }

    const envFileContent = fs.readFileSync(envFilePath, 'utf8');
    const maintenanceModeLine = envFileContent
      .split(/\r?\n/)
      .map((line: string) => line.trim())
      .find(
        (line: string) =>
          !line.startsWith('#') && line.startsWith('GATSBY_MAINTENANCE_MODE=')
      );

    if (!maintenanceModeLine) {
      return false;
    }

    const rawValue = maintenanceModeLine.split('=')[1]?.trim();

    return rawValue === 'true';
  } catch {
    return false;
  }
};

export const isMaintenanceModeEnabledFromEnv = getMaintenanceModeFromEnvFile();

export const getIsMaintenanceModeEnabled = () => {
  if (
    typeof window !== 'undefined' &&
    typeof window.__AZZURRA_MAINTENANCE_MODE__ === 'boolean'
  ) {
    return window.__AZZURRA_MAINTENANCE_MODE__;
  }

  return isMaintenanceModeEnabledFromEnv;
};

export {};
