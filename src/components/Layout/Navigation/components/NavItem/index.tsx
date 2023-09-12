import React from 'react';
import { Link } from 'react-scroll';

import { addClassName } from '@root/modules/utils';

interface NavItem {
  to: string;
  label: string;
  className?: string;
  onClick?: () => void;
}

function NavItem({ to, label, className, onClick }: NavItem) {
  return (
    <Link
      spy
      smooth
      activeClass="group active text-azzurra-opaque-gold"
      to={to}
      offset={-50}
      duration={500}
      onClick={onClick}
      className={
        'relative inline-block py-4 px-2 text-white font-normal cursor-pointer' +
        `${addClassName(className)}`
      }
    >
      {label}
      <span
        className={
          'w-full h-0.5 absolute left-0 block ' +
          'bottom-0 group-[.active]:bg-azzurra-opaque-gold'
        }
      />
    </Link>
  );
}

export default NavItem;
