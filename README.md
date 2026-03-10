<h1><img src="./static/images/azzurra__social-media.jpg" alt="Azzurra web interface"></h1>

## Web interface for Azzurra Capital

Project created with [Gatsby](https://www.gatsbyjs.com/) and [Typescript](https://www.typescriptlang.org/).

<br />

### Base project and modules

Clone the repository and run `yarn` from inside the root folder to install all dependencies.

<br />

### Start

Use `yarn start` to run the app in development mode at [https://localhost:8000](http://localhost:8000/)

### Maintenance mode

This project can be switched into maintenance mode with the `GATSBY_MAINTENANCE_MODE` environment variable.

This repository reads the maintenance flag only from the root `.env` file loaded by `gatsby-config.ts`.

- Set `GATSBY_MAINTENANCE_MODE=true` in `.env` to enable maintenance mode.
- Set `GATSBY_MAINTENANCE_MODE=false` in `.env` to disable maintenance mode.

An `.env.example` file is included as the template for the root `.env`.

When the flag is enabled:

- Gatsby pages render a maintenance screen instead of the website.
- In development, `/` and `/en/` also redirect to `/maintenance/` and `/en/maintenance/` so the switch is obvious during testing.
- The build generates a minimal Apache `.htaccess` for Locaweb hosting. When maintenance is enabled, it rewrites public requests to `/maintenance.html`, which prevents the public site and PHP contact endpoint from being accessed.

Disable the flag and rebuild to publish the normal site again.

## Folder structure and relevant files

    root
    ├── public                             # Static files and base HTML and metadata from create-react-app
    │
    ├── src
    │    ├── components                    # Components used in views
    │    │    └── ...
    │    │
    │    ├── constants                     # Export named constants for the general app
    │    │    └── ...
    │    │
    │    ├── images                        # Images used in views and components (svg, png, jpg, ...) to relative path
    │    │    └── ...
    │    │
    │    ├── modules                       # Static assets imported at build time
    │    │    ├── hooks                    # React hooks functions
    │    │    │    └── ...
    │    │    │
    │    │    └── utils                    # Common small utility functions
    │    │
    │    ├── styles                        # Global styles and theme
    │    │    └── ...
    │    ├── pages                         # Pages for routing
    │    │    ├── en                       # Home page for english language
    │    │    │   └── ...
    │    │    ├── 404.tsx                  # 404 page
    │    │    └── index.tsx                # Home page for portuguese language
    │    │
    │    ├── templates                     # Templates for generating page or component used in many places
    │    │    └── ...
    │    │
    │    └── types                         # Type files for components and functions
    │         └── ...
    │
    │    
    ├── tailwind.config.js                 # Tailwind configuration
    ├── tsconfig.json                      # Typescript configuration
    ├── tsconfig.paths.json                # Typescript project paths configuration
    ├── gatsby-config.ts                   # Gatbsy configuration
    └── ...
