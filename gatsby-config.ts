import type { GatsbyConfig } from 'gatsby';

// eslint-disable-next-line
const fs = require('fs');
// eslint-disable-next-line
const path = require('path');

const loadEnvFile = (fileName: string) => {
  const envFilePath = path.resolve(__dirname, fileName);

  if (!fs.existsSync(envFilePath)) {
    return;
  }

  const envFileContent = fs.readFileSync(envFilePath, 'utf8');

  envFileContent.split(/\r?\n/).forEach((line: string) => {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith('#')) {
      return;
    }

    const separatorIndex = trimmedLine.indexOf('=');

    if (separatorIndex === -1) {
      return;
    }

    const key = trimmedLine.slice(0, separatorIndex).trim();

    if (!key || typeof process.env[key] !== 'undefined') {
      return;
    }

    let value = trimmedLine.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  });
};

loadEnvFile('.env');

const isMaintenanceModeEnabled =
  process.env.GATSBY_MAINTENANCE_MODE === 'true';

/** @type {import('tailwindcss').Config} */
const config: GatsbyConfig = {
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-svgr',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'portal'
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@root': path.resolve(__dirname, 'src'),
          '@static': path.resolve(__dirname, 'static'),
          '@content': path.resolve(__dirname, 'content'),
          '@constant': path.resolve(__dirname, 'src/constant'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@templates': path.resolve(__dirname, 'src/templates')
        },
        extensions: []
      }
    }
  ]
};

export default config;
