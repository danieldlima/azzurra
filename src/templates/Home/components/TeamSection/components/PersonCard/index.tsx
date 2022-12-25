import React, { useState } from 'react';

import IcArrowDown from '@components/Icons/ArrowDown';

interface PersonCardProps {
  name: string;
  bio: {
    fullName: string;
    text?: string;
  };
}

function PersonCard({ name, bio }: PersonCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      className={
        'relative  min-h-[380px] sm:min-h-[450px] bg-team-person-card bg-azzurra-gray-70 ' +
        'bg-cover bg-90% bg-no-repeat bg-center rounded-lg p-6 overflow-hidden'
      }
    >
      <div className="w-full h-full flex items-center justify-center">
        <span
          className={
            'text-5xl sm:text-5xl block text-center font-bold text-white uppercase'
          }
        >
          {name}
        </span>
      </div>

      <button
        type="button"
        className={
          'w-11/12 absolute bottom-3 flex right-3 rotate-180 focus-visible:outline-0 ' +
          'focus-visible:rounded-lg focus-visible:border focus-visible:border-white'
        }
        onClick={toggleDetails}
      >
        <div
          className={
            'w-11 p-1.5 bg-opacity-0 hover:bg-azzurra-gold text-azzurra-gray-20 hover:text-azzurra-gray-20 ' +
            'hover:bg-azzurra-gold-linear rounded-lg transition-all cursor-pointer'
          }
        >
          <IcArrowDown className={'w-full h-full'} />
        </div>
      </button>

      <div
        className={
          'absolute h-full w-full p-6 bottom-0 right-0 left-0 text-white ' +
          `bg-azzurra-gold-linear transition-all overflow-y-scroll ${
            isOpen ? 'top-0 bottom-0' : 'top-full'
          }`
        }
      >
        <div
          className="sticky w-full top-0 flex justify-end z-10"
          onClick={toggleDetails}
        >
          <button
            type="button"
            className={
              'rotate-0 focus-visible:border-0 ' +
              'focus-visible:outline-0 focus-visible:border focus-visible:border-white focus-visible:rounded-lg'
            }
            onClick={(e) => {
              e.stopPropagation();
              toggleDetails();
            }}
          >
            <div
              className={
                'flex flex-end w-11 h-11 p-1.5 bg-opacity-0 hover:bg-azzurra-gray-20 text-azzurra-gray-20 ' +
                'hover:text-azzurra-gold rounded-lg transition-all cursor-pointer'
              }
            >
              <IcArrowDown className={'w-full h-full'} />
            </div>
          </button>
        </div>

        <div className={'relative -top-10'}>
          <span className={'sm:text-xl block font-bold uppercase mb-3'}>
            {bio.fullName}
          </span>

          <p className={'text-base sm:text-lg leading-5 font-normal'}>
            {bio.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
