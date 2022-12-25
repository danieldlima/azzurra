import React, { useState } from 'react';

import IcArrowDown from '@components/Icons/ArrowDown';

function PersonCard() {
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
          leandro alves
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
          `bg-azzurra-gold-linear transition-all overflow-hidde ${
            isOpen ? 'top-0 bottom-0' : 'top-full'
          }`
        }
      >
        <button
          type="button"
          className={
            'absolute w-11/12 flex justify-end top-3 right-3 rotate-0 focus-visible:border-0 ' +
            'focus-visible:outline-0 focus-visible:border focus-visible:border-white focus-visible:rounded-lg'
          }
          onClick={toggleDetails}
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

        <span className={'sm:text-xl block font-bold uppercase mb-3'}>
          Gilvam Rudge Filho
        </span>

        <p className={'text-base sm:text-lg leading-5 font-normal'}>
          Formado em Relações Internacionais pela FAAP, atuou em instituições
          financeiras nas bolsas do Brasil, Nova Iorque, Chicago e Londres, com
          mais de 15 anos de experiência. Foi broker de mercado futuro na ICAP
          Brasil e financial advisor institucional no Private do Banco Wells
          Fargo, se especializando em fundos offshore e produtos estruturados.
        </p>
      </div>
    </div>
  );
}

export default PersonCard;
