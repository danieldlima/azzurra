import type { GatsbyConfig } from 'gatsby';

// eslint-disable-next-line
const path = require('path');

/** @type {import('tailwindcss').Config} */
const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-svgr',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@root': path.resolve(__dirname, 'src'),
          '@static': path.resolve(__dirname, 'static'),
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
