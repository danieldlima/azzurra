import React, { ReactNode, useContext } from 'react';

import { HomeContext } from '@root/modules/providers';

import IcArrowDown from '@components/Icons/ArrowDown';

interface ButtonCompassDetailsProps {
  id?: string;
  className?: string | ReactNode;
  label?: string | ReactNode;
  arrowAngle?: 180 | 0;
  ref?: React.LegacyRef<HTMLDivElement>;
  onClick?: () => void;
}

function ButtonCompassDetails({
  ref,
  id,
  onClick,
  arrowAngle = 180,
  label = 'Button',
  className = ''
}: ButtonCompassDetailsProps) {
  const {
    aboutSection: { compassItem }
  } = useContext(HomeContext);

  const handleClick = () => {
    if (compassItem.toggleDetails) compassItem.toggleDetails();
    if (onClick) onClick();
  };

  return (
    <div
      ref={ref}
      id={id}
      className={`relative w-full sm:max-w-6xl mx-auto ${className}`}
    >
      <div
        className={`w-full h-[2px] sm:h-px bg-azzurra-navy-blue absolute top-1/2 -transform-x-1/2 transition-opacity ${
          compassItem.isDetailsOpen
            ? 'sm:opacity-100'
            : 'opacity-100 sm:opacity-0'
        }`}
      />

      <button
        type="button"
        className={
          'cursor-pointer flex flex-row items-center justify-center py-1 px-6 w-fit mx-auto border-2 ' +
          'border-azzurra-navy-blue rounded-full bg-white relative z-10'
        }
        onClick={handleClick}
      >
        <div className="mt-2 sm:mt-0 text-lg text-azzurra-navy-blue font-medium">
          {label}
        </div>

        <div
          className={`text-azzurra-opaque-gold w-7 ml-2 transition-all rotate-${arrowAngle}`}
        >
          <IcArrowDown className="w-full" />
        </div>
      </button>
    </div>
  );
}

export default ButtonCompassDetails;
