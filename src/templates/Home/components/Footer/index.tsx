import React, { useContext } from 'react';

import BrFrag from '@images/azzurra__ic-br__flag.svg';
import UsFrag from '@images/azzurra__ic-us__flag.svg';
import Anbima1 from '@images/azzurra__ic__anbima--1.png';
import Anbima2 from '@images/azzurra__ic__anbima--2.png';

import { HomeContext } from '@root/modules/providers';

import AzzurraBrand from '@components/Icons/AzzurraBrand';
import Container from '@components/Layout/Container';

function Footer() {
  const { footer, aboutSection } = useContext(HomeContext);

  function handleClick(elementId: string) {
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }

  return (
    <footer
      className="relative pt-24 pb-6 bg-azzurra-navy-blue transition-all"
      style={{ top: footer?.y?.value ?? 0 }}
    >
      <Container
        className={
          'flex flex-col lg:flex-row justify-center lg:justify-between ' +
          'px-6 xl:px-0 gap-6 lg:gap-0'
        }
      >
        <div className="w-full lg:w-3/12">
          <div className="w-52 lg:w-full">
            <AzzurraBrand className={'w-full h-full'} color="white" />
          </div>
        </div>

        <div className="w-full lg:w-7/12 text-white flex flex-row flex-wrap">
          <div className="w-8/12 lg:w-4/12">
            <ul className={'list-none leading-7'}>
              <li>
                <span className="font-bold uppercase text-sm">
                  A AZZURRA capital
                </span>
                <ul className={'ml-3'}>
                  <li>
                    <button
                      onClick={() => {
                        handleClick('meet-azzurra');
                      }}
                    >
                      Conheça a Azzurra Capital
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        handleClick('why-azzurra');
                      }}
                    >
                      Por que a Azzurra Capital?
                    </button>

                    <ul className={'ml-3'}>
                      <li>
                        <button
                          onClick={() => {
                            if (
                              aboutSection?.compassItem &&
                              aboutSection.compassItem.setIsDetailsOpen
                            ) {
                              aboutSection.compassItem.setIsDetailsOpen(true);
                            }

                            handleClick('about-compass');
                          }}
                        >
                          Explore a nossa visão
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        handleClick('capacity-and-services');
                      }}
                    >
                      Capacidade & Serviços
                    </button>
                  </li>
                </ul>
              </li>
              <li className={'uppercase'}>
                <button
                  className="font-bold uppercase text-sm"
                  onClick={() => {
                    handleClick('team');
                  }}
                >
                  NOSSO TIME
                </button>
              </li>
              <li className={'uppercase'}>
                <button
                  className="font-bold uppercase text-sm"
                  onClick={() => {
                    handleClick('investment-policy');
                  }}
                >
                  política de investimento
                </button>
              </li>
              <li className={'uppercase hidden'}>
                <button className="font-bold uppercase text-sm">
                  blog azzurra
                </button>
              </li>
              <li className={'uppercase'}>
                <button
                  className="font-bold uppercase text-sm"
                  onClick={() => {
                    handleClick('contact');
                  }}
                >
                  CONTATO
                </button>
              </li>
            </ul>
          </div>

          <div className="w-4/12 lg:w-4/12 flex justify-center">
            <div className="w-6/12 flex flex-col gap-4">
              <img src={Anbima1} alt="Selo AMBIMA: gestão de patrimônio" />
              <img src={Anbima2} alt="Selo AMBIMA: gestão de recursos" />
            </div>
          </div>

          <div className="w-full lg:w-4/12 flex justify-start mt-10 lg:mt-0">
            <ul>
              <li>
                <span className="block font-bold uppercase text-sm mb-2">
                  selecione o seu idioma
                </span>
                <ul className={'ml-3 text-base'}>
                  <li className={'mb-3'}>
                    <a href="#" className={'flex items-center gap-2'}>
                      <span
                        className={
                          'w-8 h-8 sm:w-6 sm:h-6 rounded-full flex justify-center ' +
                          'items-center overflow-hidden bg-[#229e45]'
                        }
                      >
                        <img
                          src={BrFrag}
                          className={'h-4 max-w-none max-h-none'}
                          alt="Bandeira do Brasil"
                        />
                      </span>
                      <span>Português</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className={'flex items-center gap-2'}>
                      <span
                        className={
                          'w-8 h-8 sm:w-6 sm:h-6 rounded-full flex justify-center ' +
                          'items-center overflow-hidden'
                        }
                      >
                        <img
                          src={UsFrag}
                          className={'h-8 max-w-none max-h-none'}
                          alt="Bandeira EUA"
                        />
                      </span>
                      <span>English</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
