import React, { useContext } from 'react';
import { Link } from 'react-scroll';

import BrFrag from '@images/azzurra__ic-br__flag.svg';
import UsFrag from '@images/azzurra__ic-us__flag.svg';
import Anbima1 from '@images/azzurra__ic__anbima--1.png';
import Anbima2 from '@images/azzurra__ic__anbima--2.png';
import { Link as GatsbyLink } from 'gatsby-link';

import { HomeContext } from '@root/modules/providers';
import { addClassName } from '@root/modules/utils';

import AzzurraBrand from '@components/Icons/AzzurraBrand';
import Container from '@components/Layout/Container';

export interface ChildrenLinkItem {
  id: number;
  label: string;
  offset: number;
  link: string;
}

export interface LinkItem extends ChildrenLinkItem {
  items: LinkItem[] | null;
}

export interface LanguageButtons {
  id: number;
  label: string;
  alt: string;
  link: string;
  lgn: string;
  disabled: boolean;
}

export interface FooterProps {
  data: {
    nav: LinkItem[];
    copyright: string;
    language: {
      title: string;
      buttons: LanguageButtons[];
    };
  };
}

function Footer({ data }: FooterProps) {
  const { footer, aboutSection } = useContext(HomeContext);

  const flags = {
    0: {
      url: BrFrag,
      bg: 'bg-[#229e45]',
      className: 'h-4 max-w-none max-h-none'
    },
    1: {
      url: UsFrag,
      bg: 'bg-transparent',
      className: 'h-8 max-w-none max-h-none'
    }
  };

  if (!data) return null;

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
                {data.nav.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        spy
                        smooth
                        to={item.link}
                        offset={item.offset}
                        duration={500}
                        className={
                          'cursor-pointer hover:text-azzurra-opaque-gold hover:underline transition-all font-bold' +
                          ' uppercase' +
                          ' text-base'
                        }
                      >
                        {item.label}
                      </Link>

                      {!item.items
                        ? null
                        : item.items.map((child) => {
                            return (
                              <ul key={child.id} className={'ml-3'}>
                                <li>
                                  <Link
                                    spy
                                    smooth
                                    to={child.link}
                                    offset={child.offset}
                                    duration={500}
                                    className={
                                      'cursor-pointer hover:text-azzurra-opaque-gold hover:underline transition-all'
                                    }
                                  >
                                    {child.label}
                                  </Link>
                                </li>

                                {!child.items
                                  ? null
                                  : child.items.map((childTwo) => {
                                      return (
                                        <ul
                                          key={childTwo.id}
                                          className={'ml-3'}
                                        >
                                          <li>
                                            <Link
                                              spy
                                              smooth
                                              to={childTwo.link}
                                              offset={childTwo.offset}
                                              duration={500}
                                              className={
                                                'cursor-pointer hover:text-azzurra-opaque-gold hover:underline transition-all'
                                              }
                                              onClick={() => {
                                                if (
                                                  childTwo.link ===
                                                    'about-compass' &&
                                                  aboutSection?.compassItem &&
                                                  aboutSection.compassItem
                                                    .setIsDetailsOpen
                                                ) {
                                                  aboutSection.compassItem.setIsDetailsOpen(
                                                    true
                                                  );
                                                }
                                              }}
                                            >
                                              {childTwo.label}
                                            </Link>
                                          </li>
                                        </ul>
                                      );
                                    })}
                              </ul>
                            );
                          })}
                    </li>
                  );
                })}
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
                    {data.language.title}
                  </span>

                  <ul className={'ml-3 text-base'}>
                    {data.language.buttons.map((btn, idx) => {
                      return (
                        <li key={btn.id} className={'mb-3'}>
                          <GatsbyLink
                            to={btn?.link}
                            title={btn.alt}
                            className={
                              'flex items-center gap-2' +
                              addClassName(
                                btn.disabled ? 'disabled:opacity-75' : ''
                              )
                            }
                            activeClassName={'font-semibold'}
                          >
                            <span
                              className={
                                'w-8 h-8 sm:w-6 sm:h-6 rounded-full flex justify-center items-center ' +
                                'overflow-hidden ' +
                                addClassName(
                                  flags[idx as keyof typeof flags].bg
                                )
                              }
                            >
                              <img
                                src={flags[btn.id as keyof typeof flags].url}
                                className={
                                  flags[btn.id as keyof typeof flags].className
                                }
                                alt={btn.alt}
                              />
                            </span>
                            <span>{btn.label}</span>
                          </GatsbyLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={'text-left lg:text-right text-white text-sm'}>
          <p>
            {data.copyright} - {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
