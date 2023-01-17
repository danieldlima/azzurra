import React, { useContext } from 'react';
import { Link } from 'react-scroll';

import BrFrag from '@images/azzurra__ic-br__flag.svg';
import UsFrag from '@images/azzurra__ic-us__flag.svg';
import Anbima1 from '@images/azzurra__ic__anbima--1.png';
import Anbima2 from '@images/azzurra__ic__anbima--2.png';

import { HomeContext } from '@root/modules/providers';

import AzzurraBrand from '@components/Icons/AzzurraBrand';
import Container from '@components/Layout/Container';

function Footer() {
  const { footer, aboutSection } = useContext(HomeContext);

  return (
    <footer
      className="relative pt-24 pb-10 lg:pb-6 bg-azzurra-navy-blue transition-all"
      style={{ top: footer?.y?.value ?? 0 }}
    >
      <Container className="flex flex-col px-6 xl:px-0 gap-14 lg:gap-8">
        <div
          className={
            'flex flex-col lg:flex-row justify-center lg:justify-between ' +
            'gap-6 lg:gap-0'
          }
        >
          <div className="w-full lg:w-3/12">
            <div className="w-52 lg:w-full">
              <AzzurraBrand className={'w-full h-full'} color="white" />
            </div>
          </div>

          <div className="w-full lg:w-7/12 text-white flex flex-row flex-wrap">
            <div className="w-8/12 md:w-4/12">
              <ul className={'list-none leading-7'}>
                <li>
                  <Link
                    spy
                    smooth
                    to="about"
                    offset={-50}
                    duration={500}
                    className={
                      'cursor-pointer hover:text-azzurra-opaque-gold hover:underline transition-all font-bold' +
                      ' uppercase' +
                      ' text-base'
                    }
                  >
                    A AZZURRA capital
                  </Link>
                  <ul className={'ml-3'}>
                    <li>
                      <Link
                        spy
                        smooth
                        to="meet-azzurra"
                        offset={-80}
                        duration={500}
                        className={
                          'cursor-pointer hover:text-azzurra-opaque-gold hover:underline transition-all'
                        }
                      >
                        Conheça a Azzurra Capital
                      </Link>
                    </li>
                    <li>
                      <Link
                        spy
                        smooth
                        to="why-azzurra"
                        offset={-100}
                        duration={500}
                        className={
                          'cursor-pointer hover:text-azzurra-opaque-gold hover:underline transition-all'
                        }
                      >
                        Por que a Azzurra Capital?
                      </Link>

                      <ul className={'ml-3'}>
                        <li>
                          <Link
                            spy
                            smooth
                            to="about-compass"
                            offset={80}
                            duration={500}
                            className={
                              'cursor-pointer hover:text-azzurra-opaque-gold hover:underline transition-all'
                            }
                            onClick={() => {
                              if (
                                aboutSection?.compassItem &&
                                aboutSection.compassItem.setIsDetailsOpen
                              ) {
                                aboutSection.compassItem.setIsDetailsOpen(true);
                              }
                            }}
                          >
                            Explore a nossa visão
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        spy
                        smooth
                        to="capacity-and-services"
                        offset={-100}
                        duration={500}
                        className={
                          'cursor-pointer hover:text-azzurra-opaque-gold hover:underline transition-all'
                        }
                      >
                        Capacidade & Serviços
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={'uppercase'}>
                  <Link
                    spy
                    smooth
                    to="team"
                    offset={-50}
                    duration={500}
                    className={
                      'cursor-pointer hover:text-azzurra-opaque-gold hover:underline transition-all font-bold' +
                      ' uppercase' +
                      ' text-base'
                    }
                  >
                    NOSSO TIME
                  </Link>
                </li>
                <li className={'uppercase'}>
                  <Link
                    spy
                    smooth
                    to="investment-policy"
                    duration={500}
                    className={
                      'cursor-pointer hover:text-azzurra-opaque-gold hover:underline transition-all font-bold' +
                      ' uppercase' +
                      ' text-base'
                    }
                  >
                    política de investimento
                  </Link>
                </li>
                <li className={'uppercase hidden'}>
                  <button className="font-bold uppercase text-sm">
                    blog azzurra
                  </button>
                </li>
                <li className={'uppercase'}>
                  <Link
                    spy
                    smooth
                    to="contact"
                    offset={-50}
                    duration={500}
                    className={
                      'cursor-pointer hover:text-azzurra-opaque-gold hover:underline transition-all font-bold' +
                      ' uppercase' +
                      ' text-base'
                    }
                  >
                    CONTATO
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-4/12 md:w-4/12 flex justify-center">
              <div className="w-full sm:w-7/12 md:w-5/12 lg:w-6/12 flex flex-col gap-4">
                <img src={Anbima1} alt="Selo AMBIMA: gestão de patrimônio" />
                <img src={Anbima2} alt="Selo AMBIMA: gestão de recursos" />
              </div>
            </div>

            <div className="w-full md:w-4/12 flex justify-start mt-10 md:mt-0">
              <ul>
                <li>
                  <span className="block font-bold uppercase text-sm mb-2">
                    selecione o seu idioma
                  </span>
                  <ul className={'ml-3 text-base'}>
                    <li className={'mb-3'}>
                      <button className={'flex items-center gap-2'}>
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
                      </button>
                    </li>

                    <li>
                      <button
                        className={
                          'flex items-center gap-2 disabled:opacity-75'
                        }
                        disabled
                      >
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
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={'text-left lg:text-right text-white text-sm'}>
          <p>
            All Rights reserved - Azzurra Capital - {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
