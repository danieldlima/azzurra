const fs = require('fs');
const path = require('path');

const isMaintenanceModeEnabled =
  process.env.GATSBY_MAINTENANCE_MODE === 'true';

const buildHtaccess = () => {
  const maintenanceBlock = isMaintenanceModeEnabled
    ? `
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_URI} !^/maintenance\.html$ [NC]
  RewriteRule ^ maintenance.html [L]
</IfModule>
`
    : '';

  return `##### LOCAWEB - NAO REMOVER #####
AddHandler php80-script .php
##### LOCAWEB - NAO REMOVER #####

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTP:X-Forwarded-Proto} !https
  RewriteCond %{HTTPS} off
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
</IfModule>

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTP_HOST} !^www\.azzurracapital\.com\.br$ [NC]
  RewriteRule ^ https://www.azzurracapital.com.br%{REQUEST_URI} [R=301,L]
</IfModule>
${maintenanceBlock}`;
};

exports.onPostBuild = ({ reporter }) => {
  const outputPath = path.join(process.cwd(), 'public', '.htaccess');

  fs.writeFileSync(outputPath, buildHtaccess(), 'utf8');
  reporter.info('Generated minimal .htaccess for Locaweb hosting.');
};
