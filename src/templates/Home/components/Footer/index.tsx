import React, { useContext } from 'react';

import { HomeContext } from '@root/modules/providers';

import Container from '@components/Layout/Container';

function Footer() {
  const { footer } = useContext(HomeContext);

  return (
    <footer
      className="relative h-96 pt-24 bg-azzurra-navy-blue transition-all"
      style={{ top: footer?.y?.value ?? 0 }}
    >
      <Container>
        <h1 className="text-white">
          <span>Footer</span>
        </h1>
      </Container>
    </footer>
  );
}

export default Footer;
